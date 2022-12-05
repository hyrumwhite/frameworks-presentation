const name = "table-page-td";
export default name;

customElements.define(
	name,
	class TablePageTd extends HTMLTableCellElement {
		constructor() {
			super();
			this.classList.add(
				"text-left",
				"py-2",
				"text-xl",
				"group-hover/row:bg-zinc-900",
				"pr-2",
				"pl-2",
				...["first:pl-4", "first:pr-2", "first:rounded-l-full"],
				...["last:pl-2", "last:pr-4", "last:rounded-r-full"]
			);
		}
	},
	{ extends: "td" }
);
