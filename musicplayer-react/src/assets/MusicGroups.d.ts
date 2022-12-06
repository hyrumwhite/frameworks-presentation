export type Song = {
  name: string;
  descriptor: string | File;
  album: string;
  artist: string;
  length: number;
  hash: string;
  id: string;
};

export type Album = {
  name: string;
  songs: Song[];
  artist: string;
  art: string | File;
  id: string;
};

export type Playlist = {
  name: string;
  songs: Song[];
  id: string;
};
