<script>
	import TablePage from "./TablePage.svelte";
	import { useMusicStore } from "../composables/useMusicStore.js";
	//if going non-pinia route, store variables must be exposed in the setup function

	const { playlists, getPlaylists } = useMusicStore();
	getPlaylists();
	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Song Count", value: "songs" },
	];
</script>

<TablePage items={playlists} {headers}>
	<template slot="h1">Playlists</template>
	<template slot="td_songs" let:value>{value.length}</template>
</TablePage>
