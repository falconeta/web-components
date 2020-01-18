import { PhotoCollectionModel } from './../models';

export interface IPhotosChooserEmitter {
  photoLimit: number;
  callBack: (photo: PhotoCollectionModel[]) => void;
  photosSelected: PhotoCollectionModel[];
}
