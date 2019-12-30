import { ISubPhoto } from './sub-photo.interface';


export interface IPhotosChooserEmitter {
  photoLimit: number;
  callBack: (photo: ISubPhoto) => void;
}
