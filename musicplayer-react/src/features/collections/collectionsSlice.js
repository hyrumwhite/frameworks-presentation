import { createSlice } from "@reduxjs/toolkit";
import { musicService } from "../../assets/musicService.js";
export const collectionsSlice = createSlice({
	name: "collections",
	initialState: {
		songs: [],
		albums: [],
		playlists: [],
	},
	reducers: {
		async getSongs() {
			state.value = await musicService.getSongs();
		},
		async getAlbums() {
			state.value = await musicService.getAlbums();
		},
		async getPlaylists() {
			state.value = await musicService.getAlbums();
		},
	},
});

// Action creators are generated for each case reducer function
export const { getSongs, getAlbums, getPlaylists } = collectionsSlice.actions;

export default collectionsSlice.reducer;
