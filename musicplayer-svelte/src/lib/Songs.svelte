<script setup>
	import TablePage from "./TablePage.svelte";
	import { useMusicStore } from "../composables/useMusicStore.js";
	//if going non-pinia route, store variables must be exposed in the setup function

	const { songs, getSongs } = useMusicStore();
	getSongs();
	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Artist", value: "artist" },
		{ text: "Album", value: "album" },
		{ text: "Length", value: "length" },
	];
</script>

<TablePage items={songs} {headers}>
	<span slot="h1">Songs</span>
</TablePage>
