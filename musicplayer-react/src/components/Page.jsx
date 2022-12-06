export const Page = function ({ classname }) {
	return (
		<section classname={classname + "p-4 pt-3"}>
			<h1 class="text-4xl">
				<slot name="h1" />
			</h1>
			<slot />
		</section>
	);
};
