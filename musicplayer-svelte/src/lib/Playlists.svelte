<script>
	import TablePage from "./TablePage.svelte";
	import SongCount from "./SongCount.svelte";
	import SongsLength from "./SongsLength.svelte";
	import { onDestroy } from "svelte";
	import { playlists, getPlaylists } from "../assets/musicStore.js";
	export let currentRoute;
	export let params;
	let playlistsList = [];
	const unsubscribe = playlists.subscribe((value) => (playlistsList = value));
	onDestroy(unsubscribe);
	getPlaylists();

	const headers = [
		{ text: "Name", value: "name" },
		{ text: "Songs", value: "songs", component: SongCount },
		{ text: "Length", value: "songs", component: SongsLength },
	];
</script>

<TablePage items={playlistsList} {headers}>
	<span slot="h1">Playlists</span>
</TablePage>
