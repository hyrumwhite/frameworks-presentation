<template>
	<router-link
		class="
			p-3
			text-xl text-zinc-50/80
			rounded-md
			hover:bg-zinc-700/70
			flex
			items-center
			transition-colors
		"
		active-class="bg-zinc-700/50"
		v-bind="$attrs"
		><slot
	/></router-link>
</template>
