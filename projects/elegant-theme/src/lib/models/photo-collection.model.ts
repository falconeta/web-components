import { ISubPhoto, IPhotoCollection } from '../interfaces';

export class PhotoCollectionModel {

  constructor(private internalPhotoCollection: IPhotoCollection | ISubPhoto) { }

  public set url(url: string) {
    this.internalPhotoCollection.id = url;
  }

  public get url(): string {
    return this.internalPhotoCollection.url;
  }

  public set id(id: string) {
    this.internalPhotoCollection.id = id;
  }

  public get id(): string {
    return this.internalPhotoCollection.id;
  }

  public set md5(md5: string) {
    (this.internalPhotoCollection as IPhotoCollection).md5 = md5;
  }

  public get md5(): string {
    return (this.internalPhotoCollection as IPhotoCollection).md5;
  }

  public set collections(collections: string[]) {
    (this.internalPhotoCollection as IPhotoCollection).collections = collections;
  }

  public get collections(): string[] {
    return (this.internalPhotoCollection as IPhotoCollection).collections;
  }

  public set idPhoto(idPhoto: string) {
    (this.internalPhotoCollection as ISubPhoto).idPhoto = idPhoto;
  }

  public get idPhoto(): string {
    return (this.internalPhotoCollection as ISubPhoto).idPhoto;
  }

  public set metadatas(metadatas: string[]) {
    (this.internalPhotoCollection as ISubPhoto).metadatas = metadatas;
  }

  public get metadatas(): string[] {
    return (this.internalPhotoCollection as ISubPhoto).metadatas;
  }

  public set position(position: number) {
    (this.internalPhotoCollection as ISubPhoto).position = position;
  }

  public get position(): number {
    return (this.internalPhotoCollection as ISubPhoto).position;
  }

  public get subPhoto(): ISubPhoto {
    const { id, url } = this.internalPhotoCollection;
    return {
      idPhoto: this.idPhoto || id,
      url,
      metadatas: this.metadatas || []
    };
  }
}
