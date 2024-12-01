export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  previewImage?: string;
}

export interface Folder {
  id: string;
  name: string;
  subFolders: Folder[];
  repositories: Repository[];
}