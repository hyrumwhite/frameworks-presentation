<script>
	let count = 0;
	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment} class="bg-red-500">
	count is {count}
</button>
