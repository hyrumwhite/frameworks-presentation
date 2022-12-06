<script>
	import TablePage from "./TablePage.svelte";
	import SongCount from "./SongCount.svelte";
	import SongsLength from "./SongsLength.svelte";
	import { onDestroy } from "svelte";
	import { albums, getAlbums } from "../assets/musicStore.js";
	export let currentRoute;
	export let params;
	let albumsList = [];
	const unsubscribe = albums.subscribe((value) => (albumsList = value));
	onDestroy(unsubscribe);
	getAlbums();

	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Artist", value: "artist" },
		{ text: "Songs", value: "songs", component: SongCount },
		{ text: "Length", value: "songs", component: SongsLength },
	];
	// test
	const getLength = (item) =>
		item.reduce((acc, value) => acc + value.length, 0);
</script>

<TablePage items={albumsList} {headers}>
	<span slot="h1">Albums</span>
</TablePage>
