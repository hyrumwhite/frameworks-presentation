<script>
	export let classname = "";
</script>

<section class="p-4 pt-3 {classname}">
	<h1 class="text-4xl"><slot name="h1" /></h1>
	<slot />
</section>
