<script>
	import { routeIsActive } from "svelte-router-spa";
	import { Navigate } from "svelte-router-spa";
	export let to = "";
	let isActive = routeIsActive(to);
	const setIsActive = () => (isActive = location.pathname === to);
	const handleClick = () => {
		window.setTimeout(() => {
			window.dispatchEvent(new CustomEvent("popstate"));
		}, 80);
	};
</script>

<svelte:window on:popstate={setIsActive} on:popstate={setIsActive} />

<span
	class="page-link"
	class:active={isActive}
	on:mousedown={handleClick}
	on:keydown={handleClick}
>
	<Navigate {to}><slot /></Navigate>
</span>
