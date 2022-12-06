import SongsPage from "./lib/Songs.svelte";
import AlbumsPage from "./lib/Albums.svelte";
import PlaylistsPage from "./lib/Playlists.svelte";

import DefaultLayout from "./views/default.svelte";
const routes = [
	{
		name: "/",
		component: SongsPage,
		layout: DefaultLayout,
	},
	{
		name: "/albums",
		component: AlbumsPage,
		layout: DefaultLayout,
	},
	{
		name: "/playlists",
		component: PlaylistsPage,
		layout: DefaultLayout,
	},
];

export { routes };
