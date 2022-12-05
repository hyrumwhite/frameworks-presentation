import TablePageTd from "./TablePageTd";

const name = "table-page-row";
export default name;

customElements.define(
	name,
	class TablePageRow extends HTMLTableRowElement {
		constructor() {
			super();
			this.classList.add("cursor-pointer", "rounded-md", "group/row");
		}
		set headers(headers) {
			this._headers = headers;
		}
		get headers() {
			return this._headers;
		}
		set item(item) {
			if (!this.headers) {
				return;
			}
			this.innerHTML = "";
			this._item = item;
			for (let header of this.headers) {
				let td = document.createElement("td", { is: TablePageTd });
				td.textContent = item[header.value];
				this.appendChild(td);
			}
		}
	},
	{ extends: "tr" }
);
