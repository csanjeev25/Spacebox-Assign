import { IError } from "src/redux/types";

export interface IErrorWithCause extends IError {
  cause: any
}

export interface IUploadedImageScreen {
  visible: boolean
  onClose: () => void
}