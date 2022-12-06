<script>
	import Page from "./Page.svelte";

	export let items = [];
	export let headers = [];
	export let rowValueKey = "id";
</script>

<Page classname="flex flex-col gap-8">
	<slot slot="h1" name="h1" />
	<table class="w-full">
		<thead>
			<tr>
				{#each headers as header, index (index)}
					<th
						class={`text-left font-bold pr-2 ${
							(index === 0 && "pr-2 pl-4") ||
							(index === headers.length - 1 && "pr-4 pl-2") ||
							"px-2"
						}`}
					>
						{header.text}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each items as item (item[rowValueKey])}
				<tr class="cursor-pointer rounded-md group/row">
					{#each headers as header, index (header.text)}
						<td
							class={`text-left py-2 text-xl group-hover/row:bg-zinc-900 ${
								(index === 0 && "pr-2 pl-4 rounded-l-full") ||
								(index === headers.length - 1 && "pr-4 pl-2 rounded-r-full") ||
								"px-2"
							}`}
						>
							{#if header.component}
								<svelte:component
									this={header.component}
									value={item[header.value]}
								/>
							{:else}
								{item[header.value]}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</Page>
