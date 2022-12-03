import { ref } from "vue";
import { musicService } from "../assets/musicService.js";
/**
 * @typedef {import('../assets/MusicGroups').Song} Song
 */
/**
 * @typedef {import('../assets/MusicGroups').Album} Album
 */
/**
 * @typedef {import('../assets/MusicGroups').Playlist} Playlist
 */
/**
 * @type {import("vue").Ref<Song[]>}
 */

//if going non-pinia route, store variables must be declared outside the store scope so they don't get instantiated
const songs = ref([]);
const albums = ref([]);
const playlists = ref([]);

export const useMusicStore = () => {
	/**
	 * @returns {Promise<Song[]>}
	 */
	const getSongs = async () => {
		songs.value = await musicService.getSongs();
	};
	/**
	 * @returns {Promise<Album[]>}
	 */
	const getAlbums = async () => {
		albums.value = await musicService.getAlbums();
	};
	/**
	 * @returns {Promise<Playlist[]>}
	 */
	const getPlaylists = async () => {
		playlists.value = await musicService.getPlaylists();
	};
	return { songs, albums, playlists, getSongs, getAlbums, getPlaylists };
};
