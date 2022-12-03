import type { Album, Song, Playlist } from "./MusicGroups";

export type MusicService = {
  getAlbums: () => Album[];
  getSongs: () => Song[];
  getPlaylists: () => Playlist[];
};
