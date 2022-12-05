<script>
	import TablePage from "./TablePage.svelte";
	import { useMusicStore } from "../composables/useMusicStore.js";
	//if going non-pinia route, store variables must be exposed in the setup function
	const { albums, getAlbums } = useMusicStore();
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

<TablePage items={albums} {headers}>
	<span slot="h1">Albums</span>
	<span slot="td_songs" let:value>{value.length}</span>
	<span slot="td_length" let:item>{getLength(item.songs)}</span>
</TablePage>
