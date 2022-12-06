import TablePage from "./TablePage.svelte";
import { useSelector, useDispatch } from "react-redux";
import { getSongs } from "../features/collections/collectionsSlice";

import { msToSongLength } from "../assets/msToSongLength";

export const Songs = function () {
	const songs = useSelector((state) => state.collections.songs);
	const dispatch = useDispatch();
	dispatch(getSongs());

	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Artist", value: "artist" },
		{ text: "Album", value: "album" },
		{
			text: "Length",
			value: "length",
			transform({ value: ms }) {
				return msToSongLength(ms);
			},
		},
	];
	return (
		<TablePage items={songs} headers={headers}>
			<span slot="h1">Songs</span>
		</TablePage>
	);
};
