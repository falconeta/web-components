import { PhotoCollectionModel } from './../models';
import { ISubContent } from './sub-content.interface';

export interface IDatasToSave {
  photos?: PhotoCollectionModel[];
  contents?: ISubContent[];
}
