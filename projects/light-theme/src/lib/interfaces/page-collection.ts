
export interface PagePhoto {
  id?: string;
  idPhoto: string;
  url?: string;
  position?: number;
  tempPosition: number;
}

export interface PageContent {
  readonly id?: string;
  lang: string;
  title: string;
  value: string;
  position: number;
  tempPosition: number;
}
