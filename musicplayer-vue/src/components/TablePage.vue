<script setup>
import Page from "./Page.vue";

const props = defineProps({
	items: { type: Array, default: () => [] },
	headers: { type: Array, default: () => [] },
	rowValueKey: { type: String, default: "id" },
});
</script>

<template>
	<Page class="flex flex-col gap-8">
		<template #h1>
			<slot name="h1" />
		</template>
		<table class="w-full">
			<thead>
				<tr>
					<th
						v-for="(header, index) of headers"
						:key="header.text"
						class="text-left font-bold pr-2"
						:class="{
							'pr-2 pl-4': index === 0,
							'pr-4 pl-2': index === headers.length - 1,
							'px-2': index != 0 && index != headers.length - 1,
						}"
					>
						{{ header.text }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="item of items"
					:key="item[rowValueKey]"
					class="cursor-pointer rounded-md group/row"
				>
					<td
						v-for="(header, index) of headers"
						:key="header.text"
						class="text-left py-2 text-xl group-hover/row:bg-zinc-900"
						:class="{
							'pl-4 pr-2 rounded-l-full': index === 0,
							'pl-2 pr-4 rounded-r-full': index === headers.length - 1,
							'px-2': index != 0 && index != headers.length - 1,
						}"
					>
						<slot
							:name="`td_${header.value}`"
							:value="item[header.value]"
							:item="item"
						>
							{{ item[header.value] }}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</Page>
</template>
