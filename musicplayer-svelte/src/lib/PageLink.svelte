<script>
	import { Navigate } from "svelte-router-spa";
	export let to = "";
</script>

<span
	class="
		p-3
		text-xl text-zinc-50/80
		rounded-md
		hover:bg-zinc-700/70
		flex
		items-center
		transition-colors
	"
>
	<Navigate {to}><slot /></Navigate>
</span>
