<script>
	import TablePage from "./TablePage.svelte";
	import { onDestroy } from "svelte";
	import { songs, getSongs } from "../assets/musicStore.js";
	import { msToSongLength } from "../assets/msToSongLength";
	export let currentRoute;
	export let params;

	let songsList = [];
	const unsubscribe = songs.subscribe((value) => (songsList = value));
	onDestroy(unsubscribe);
	getSongs();

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
</script>

<TablePage items={songsList} {headers}>
	<span slot="h1">Songs</span>
</TablePage>
