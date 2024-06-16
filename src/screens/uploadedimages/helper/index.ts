import {firebase} from '@react-native-firebase/storage';
import {ERROR_TYPE, IError, IImage} from 'src/redux/types';
import { IErrorWithCause } from '../types';

export const fetchImages = async (): Promise<IImage[] | IErrorWithCause> => {
  try {
    const storageRef = firebase.storage().ref('/images/'); // Assuming your images are stored in a folder called 'images'
    const result = await storageRef.listAll();
    const imageUrls: IImage[] = await Promise.all(
      result.items.map(async imageRef => {
        const url = await imageRef.getDownloadURL();
        return {id: imageRef.name, uri: url};
      }),
    );
    return imageUrls;
  } catch (error) {
    return {
      type: ERROR_TYPE.SOMETING_WENT_WRONG,
      message: JSON.stringify(error),
      cause: error
    };
  }
};

// Type guard function
export function isIError(obj: any): obj is IError {
  return (
    obj &&
    typeof obj.message === 'string' &&
    Object.values(ERROR_TYPE).includes(obj.type)
  );
}
