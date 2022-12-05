import { hackyStyleSheet } from "./tw.js";
import TablePageTh from "./TablePageTh.js";
import TablePageRow from "./TablePageRow.js";

const name = "table-page";
export default name;
const h1Slot = "h1";
export const slots = { h1: `slot="${h1Slot}"` };

customElements.define(
	name,
	class TablePage extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" });
			this.render(this.shadowRoot);
		}
		/**@type {function(HTMLElement):void} */
		render(element) {
			element.innerHTML = /*html*/ `
				<section class="p-4 pt-3 flex flex-col gap-8">
					<h1 class="text-4xl">
						<slot name="${h1Slot}"></slot>
					</h1>
					<table class="w-full">
						<thead>
							<tr></tr>
						</thead>
						<tbody></tbody>
					</table>
				<section>
			`;
			//shine a light into the shadow dom
			element.adoptedStyleSheets = hackyStyleSheet;
		}
		addTableHeaders(headers) {
			const headerRow = this.shadowRoot.querySelector("thead tr");
			//brute forcing lists like this is very inefficient
			headerRow.innerHTML = "";
			for (let header of headers) {
				const th = document.createElement("th", { is: TablePageTh });
				th.textContent = header.text;
				headerRow.appendChild(th);
			}
		}
		set headers(headers) {
			this._headers = headers;
			this.addTableHeaders(headers);
			if (this.items) {
				this.addTableRows();
			}
		}
		get headers() {
			return this._headers;
		}
		addTableRows(items) {
			if (!this.headers) {
				return;
			}
			let tableBody = this.shadowRoot.querySelector("tbody");
			//brute forcing lists like this is very inefficient
			tableBody.innerHTML = "";
			for (let item of items) {
				let tr = document.createElement("tr", { is: TablePageRow });
				tr.headers = this.headers;
				tr.item = item;
				tableBody.appendChild(tr);
			}
		}
		set items(items) {
			this._items = items;
			this.addTableRows(items);
		}
		get items() {
			return this._items;
		}
	}
);
