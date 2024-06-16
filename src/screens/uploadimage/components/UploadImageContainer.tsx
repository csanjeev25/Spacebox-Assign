import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableButton} from 'src/components';
import {colors, spacing} from 'src/values';
import SelectFileIcon from 'src/svg/SelectFileIcon';
import {ProgressView} from '@react-native-community/progress-view';
import {useUploadImage} from 'src/screens/uploadimage/hooks';

export function UploadImageContainer(): React.JSX.Element {
  const {
    selectedImage,
    uploadState,
    openCameraAsync,
    openImagePickerAsync,
    uploadImage,
  } = useUploadImage();

  const { isUploading, uploadingProgress } = uploadState;

  return (
    <>
      <Text
        style={{
          margin: 16,
          paddingTop: 12,
          fontSize: spacing.lg,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Upload an Image
      </Text>

      {selectedImage ? (
        <Image
          source={{uri: selectedImage.localUri}}
          style={{
            width: 328,
            aspectRatio: 4 / 3,
            margin: 16,
            alignSelf: 'center',
          }}
        />
      ) : (
        <TouchableButton onPress={openImagePickerAsync}>
          <View style={styles.selectFile}>
            <SelectFileIcon />
            <Text style={{marginVertical: spacing.grid_1_half}}>
              Select File
            </Text>
          </View>
        </TouchableButton>
      )}

      {selectedImage ? (
        isUploading ? (
          <View style={styles.progressBarContainer}>
            <ProgressView
              style={{width: '100%', marginHorizontal: 50}}
              progressTintColor={colors.palette.greenBlue}
              progress={uploadingProgress / 100}
              progressViewStyle={'bar'}
            />
            <Text>{`Uploading: ${Math.round(uploadingProgress)}%`}</Text>
          </View>
        ) : (
          <TouchableButton style={styles.cameraButton} onPress={uploadImage}>
            <Text style={styles.cameraButtonText}>Upload Image</Text>
          </TouchableButton>
        )
      ) : (
        <>
          <Text
            style={{
              fontSize: 16,
              color: '#666',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            or
          </Text>
          <TouchableButton
            style={styles.cameraButton}
            onPress={openCameraAsync}>
            <Text style={styles.cameraButtonText}>
              Open Camera & Take Photo
            </Text>
          </TouchableButton>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  selectFile: {
    width: 328,
    aspectRatio: 4 / 3,
    borderRadius: 20,
    backgroundColor: colors.palette.whiteTwo,
    borderColor: colors.palette.greenBlue,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 16,
    alignSelf: 'center',
  },
  cameraButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 48,
  },
  cameraButtonText: {
    fontSize: 16,
    color: '#00c853',
  },
  progressBarContainer: {
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
