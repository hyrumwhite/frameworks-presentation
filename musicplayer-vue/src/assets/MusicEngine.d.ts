import type { Album, Song, Playlist } from "./MusicGroups";

export interface MusicEngine {
  getAlbums: () => Album[];
  getSongs: () => Song[];
  getPlaylists: () => Playlist[];
}
