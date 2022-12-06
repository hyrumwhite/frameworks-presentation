import musicEngine from "./MusicEngineMock";
// import musicEngine from "./MusicEngineFileSystem";
// import musicEngine from "./MusicEngineHttp";

/**
 * @type {import('./MusicServiceTypes').MusicService}
 */
export const musicService = {
	getAlbums() {
		return musicEngine.getAlbums();
	},
	getSongs() {
		return musicEngine.getSongs();
	},
	getPlaylists() {
		return musicEngine.getPlaylists();
	},
};
