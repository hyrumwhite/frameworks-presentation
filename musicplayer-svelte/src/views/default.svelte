<script>
	import Sidebar from "../lib/Sidebar.svelte";
	import PageLink from "../lib/PageLink.svelte";
	import { Route } from "svelte-router-spa";
	export let currentRoute;
	export let params = {};
</script>

<div class="flex-1 flex flex-col dark:bg-zinc-900 dark:text-blue-50">
	<div class="flex flex-1">
		<Sidebar>
			<nav class="flex flex-col gap-2 p-2">
				<PageLink to="/">Songs</PageLink>
				<PageLink to="/albums">Albums</PageLink>
				<PageLink to="/playlists">Playlists</PageLink>
			</nav>
		</Sidebar>
		<div class="bg-zinc-800 flex-1">
			<Route {currentRoute} {params} />
		</div>
	</div>
</div>
