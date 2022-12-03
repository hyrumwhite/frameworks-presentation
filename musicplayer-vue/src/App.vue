<script setup>
import Sidebar from "./components/Sidebar.vue";
import TopMenu from "./components/TopMenu.vue";
import PageLink from "./components/PageLink.vue";
</script>

<template>
	<div class="flex-1 flex flex-col dark:bg-zinc-900 dark:text-blue-50">
		<TopMenu />
		<div class="flex flex-1">
			<Sidebar>
				<nav class="flex flex-col gap-2 p-2">
					<PageLink to="/"> Songs </PageLink>
					<PageLink to="/albums"> Albums </PageLink>
					<PageLink to="/playlists"> Playlists </PageLink>
				</nav>
			</Sidebar>
			<div class="bg-zinc-800 flex-1">
				<router-view />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
