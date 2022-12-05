const name = "table-page-th";
export default name;

customElements.define(
	name,
	class TablePageTg extends HTMLTableCellElement {
		constructor() {
			super();
			this.classList.add(
				"text-left",
				"font-bold",
				"pr-2",
				"pl-2",
				...["first:pr-2", "first:pl-4"],
				...["last:pr-4", "last:pl-2"]
			);
		}
	},
	{ extends: "th" }
);
