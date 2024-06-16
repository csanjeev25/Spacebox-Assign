import {
  AppActions,
  UPLOAD_IMAGE_SUCCESS,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_INPROGRESS,
} from 'src/redux/actions';
import { IUploadedImageState } from 'src/redux/types';

const initialState: IUploadedImageState = {
  images: null,
  error: null,
  isFetchingImages: true,
};

export const uploadReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        images: [...state.images, action.payload],
        error: null,
      };
    case FETCH_IMAGES_INPROGRESS: 
      return {
        ...state,
        isFetchingImages: true
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        error: null,
        isFetchingImages: false
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
