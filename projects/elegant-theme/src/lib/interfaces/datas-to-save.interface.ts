import { ISubPhoto } from './sub-photo.interface';
import { ISubContent } from './sub-content.interface';

export interface IDatasToSave {
  photos?: ISubPhoto[];
  contents?: ISubContent[];
}
