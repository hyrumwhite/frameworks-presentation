<script>
	import TablePage from "./TablePage.svelte";
	import { onDestroy } from "svelte";
	import { albums, getAlbums } from "../assets/musicStore.js";

	let albumsList = [];
	const unsubscribe = albums.subscribe((value) => (albumsList = value));
	onDestroy(unsubscribe);
	getAlbums();

	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Artist", value: "artist" },
		{ text: "Songs", value: "songs" },
		{ text: "Length", value: "length" },
	];
	// test
	const getLength = (item) =>
		item.reduce((acc, value) => acc + value.length, 0);
</script>

<TablePage items={albumsList} {headers}>
	<span slot="h1">Albums</span>
	<span slot="td_songs" let:value>{value.length}</span>
	<span slot="td_length" let:item>{getLength(item.songs)}</span>
</TablePage>
