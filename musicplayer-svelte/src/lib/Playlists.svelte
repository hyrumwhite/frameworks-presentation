<script>
	import TablePage from "./TablePage.svelte";
	import { onDestroy } from "svelte";
	import { playlists, getPlaylists } from "../assets/musicStore.js";

	let playlistsList = [];
	const unsubscribe = playlists.subscribe((value) => (playlistsList = value));
	onDestroy(unsubscribe);
	getPlaylists();

	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Song Count", value: "songs" },
	];
</script>

<TablePage items={playlistsList} {headers}>
	<template slot="h1">Playlists</template>
	<template slot="td_songs" let:value>{value.length}</template>
</TablePage>
