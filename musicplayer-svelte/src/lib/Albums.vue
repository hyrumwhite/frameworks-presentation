<script setup>
import TablePage from "./TablePage.vue";
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
const getLength = (item) => item.reduce((acc, value) => acc + value.length, 0);
</script>

<template>
	<TablePage :items="albums" :headers="headers">
		<template #h1>Albums</template>
		<template #td_songs="{ value }">{{ value.length }}</template>
		<template #td_length="{ item }">{{ getLength(item.songs) }}</template>
	</TablePage>
</template>
