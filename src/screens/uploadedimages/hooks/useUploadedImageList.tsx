import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  fetchImagesFailure,
  fetchImagesInProgress,
  fetchImagesSuccess,
} from 'src/redux/actions';
import {ERROR_TYPE} from 'src/redux/types';
import {fetchImages, isIError} from '../helper';
import {RootState} from 'src/redux/store';
import {strings} from 'src/values';

export const useUploadedImageList = () => {
  const images = useSelector((state: RootState) => state.uploadReducer.images);
  const error = useSelector((state: RootState) => state.uploadReducer.error);
  const isFetchingImages = useSelector(
    (state: RootState) => state.uploadReducer.isFetchingImages,
  );
  const dispatch = useDispatch();

  const {isConnected} = useNetInfo();

  const onErrorScreenRender = (error, stackTrace) => {
    dispatch(
      fetchImagesFailure({
        type: ERROR_TYPE.SOMETING_WENT_WRONG,
        message: strings.somethingWentWrong,
      }),
    ); //reusing fetch failure action due to time constraint //TODO: Segregate screen render error logic
    console.error(error, stackTrace);
  };

  useEffect(() => {
    const fetchData = async () => {
      /**
       * For handling the case where internet is reconnected after disconnecting but url wasn't changed.
       */
      if (images) {
        return;
      }

      dispatch(fetchImagesInProgress());
      const response = await fetchImages();

      if (isIError(response)) {
        console.error(response);
        dispatch(
          fetchImagesFailure({type: response.type, message: response.message}),
        );
      } else if (response) {
        dispatch(fetchImagesSuccess(response));
      }
    };

    // isConnected === false
    //   ? fetchData()
    //   : dispatch(
    //       fetchImagesFailure({
    //         type: ERROR_TYPE.NO_INTERNET_CONNECTION,
    //         message: 'No Internet Connection',
    //       }),
    //     );
    fetchData()
  }, [isConnected]);

  return {
    images,
    error,
    isFetchingImages,
    onErrorScreenRender,
  };
};
