import {useState, useCallback} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase, FirebaseStorageTypes} from '@react-native-firebase/storage';
import {emitter, eventName, generateGuid} from 'src/utils';
import {ISelectedImage, IUploadState} from '../types';
import { useDispatch } from 'react-redux';
import { uploadImageSuccess } from 'src/redux/actions';

export const useUploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);
  const [uploadState, setUploadState] = useState<IUploadState>({
    isUploading: false,
    uploadingProgress: 0,
  });
  const dispatch = useDispatch()

  const openImagePickerAsync = useCallback(async () => {
    let permissionResult: ImagePicker.MediaLibraryPermissionResponse =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      emitter.emit(
        eventName.SHOW_TOAST,
        'Permission to access camera roll is required!',
      );
      return;
    }

    let pickerResult: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult?.canceled) {
      setSelectedImage({localUri: pickerResult.assets?.[0]?.uri ?? null});
    } else {
      setSelectedImage(null);
    }
  }, []);

  const openCameraAsync = useCallback(async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      emitter.emit(
        eventName.SHOW_TOAST,
        'Permission to access camera is required!',
      );
      return;
    }

    let pickerResult: ImagePicker.ImagePickerResult =
      await ImagePicker.launchCameraAsync();
    if (!pickerResult?.canceled) {
      setSelectedImage({localUri: pickerResult.assets[0].uri});
    } else {
      setSelectedImage(null);
    }
  }, []);

  const uploadImage = useCallback(async () => {
    try {
      if (!selectedImage?.localUri) {
        throw new Error('No image selected');
      }

      setUploadState(prevState => ({
        ...prevState,
        isUploading: true,
      }));

      const response = await fetch(selectedImage.localUri);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('/images/')
        .child('spacebox_' + Date.now() + generateGuid());

      const uploadTask: FirebaseStorageTypes.Task = ref.put(blob);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadState({
            isUploading: true,
            uploadingProgress: progress,
          });
        },
        error => {
          console.error('Error uploading image:', error);
          setUploadState({
            isUploading: false,
            uploadingProgress: 0,
          });
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            setUploadState({
              isUploading: false,
              uploadingProgress: 0,
            });
            setSelectedImage(null);
            emitter.emit(eventName.SHOW_TOAST, "Upload Successful");
            dispatch(uploadImageSuccess({id: selectedImage.localUri, uri: downloadURL}))
          });
        }
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadState({
        isUploading: false,
        uploadingProgress: 0,
      });
    }
  }, [selectedImage]);

  return {
    selectedImage,
    uploadState,
    openCameraAsync,
    openImagePickerAsync,
    uploadImage
  };
};
