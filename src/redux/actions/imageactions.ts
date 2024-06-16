import { IError, IImage } from "src/redux/types";

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const FETCH_IMAGES_INPROGRESS = 'FETCH_IMAGES_INPROGRESS';

export interface UploadImageSuccessAction {
  type: typeof UPLOAD_IMAGE_SUCCESS;
  payload: IImage;
}

export interface FetchImagesSuccessAction {
  type: typeof FETCH_IMAGES_SUCCESS;
  payload: IImage[] | null;
}

export interface FetchImagesFailureAction {
  type: typeof FETCH_IMAGES_FAILURE;
  payload: IError;
}

export interface FetchImagesInProgressAction {
  type: typeof FETCH_IMAGES_INPROGRESS;
}

export type ImageActions =
  | UploadImageSuccessAction
  | FetchImagesSuccessAction
  | FetchImagesFailureAction
  | FetchImagesInProgressAction;

export const uploadImageSuccess = (image: IImage): UploadImageSuccessAction => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: image,
});

export const fetchImagesSuccess = (images: IImage[] | null): FetchImagesSuccessAction => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = (error: IError): FetchImagesFailureAction => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});

export const fetchImagesInProgress = (): FetchImagesInProgressAction => ({
  type: FETCH_IMAGES_INPROGRESS,
});
