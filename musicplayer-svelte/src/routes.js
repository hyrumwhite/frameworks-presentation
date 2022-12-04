import SongsPage from "./lib/SongsPage.svelte";
import AlbumsPage from "./lib/AlbumsPage.svelte";
import PlaylistsPage from "./lib/PlaylistsPage.svelte";

const routes = [
	{
		name: "/",
		component: SongsPage,
	},
	{
		name: "/albums",
		component: AlbumsPage,
	},
	{
		name: "/playlists",
		component: PlaylistsPage,
	},
];

export { routes };
