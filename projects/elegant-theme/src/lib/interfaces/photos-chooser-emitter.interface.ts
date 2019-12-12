import { PagePhoto } from './page-collection';

export interface IPhotosChooserEmitter {
  photoLimit: number;
  callBack: (photo: PagePhoto) => void;
}
