import { writable } from "svelte/store";
import { musicService } from "../assets/musicService.js";

export const songs = writable([]);
export const albums = writable([]);
export const playlists = writable([]);

export const getSongs = async () => {
	let newSongs = await musicService.getSongs();
	songs.set(newSongs);
};

export const getAlbums = async () => {
	let newAlbums = await musicService.getAlbums();
	albums.set(newAlbums);
};

export const getPlaylists = async () => {
	let newPlaylists = await musicService.getPlaylists();
	playlists.set(newPlaylists);
};
