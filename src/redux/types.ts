export interface IImage {
  id: string;
  uri: string;
}

export interface IError {
  message: string;
  type: ERROR_TYPE
}

export interface IUploadedImageState {
  images: IImage[] | null;
  error: IError | null;
  isFetchingImages: boolean,
}

export enum ERROR_TYPE {
  NO_INTERNET_CONNECTION, SOMETING_WENT_WRONG
}

