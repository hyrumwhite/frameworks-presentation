<script setup>
import TablePage from "./TablePage.vue";
import { useMusicStore } from "../composables/useMusicStore.js";
//if going non-pinia route, store variables must be exposed in the setup function

const { playlists, getPlaylists } = useMusicStore();
getPlaylists();
const headers = [
	{ text: "Name", value: "name" },
	{ text: "Song Count", value: "songs" },
];
</script>

<template>
	<TablePage :items="playlists" :headers="headers">
		<template #h1>Playlists</template>
		<template #td_songs="{value}">{{value.length}}</template>
	</TablePage>
</template>