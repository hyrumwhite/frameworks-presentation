import { createRouter, createWebHistory } from "vue-router";
import Songs from "./components/Songs.vue";
import Albums from "./components/Albums.vue";
import Playlists from "./components/Playlists.vue";

const routes = [
	{ path: "/", component: Songs },
	{ path: "/albums", component: Albums },
	{ path: "/playlists", component: Playlists },
];

export const router = createRouter({
	routes,
	history: createWebHistory(),
});
