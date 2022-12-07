// How to use tailwind in the Shadow DOM, just clone the TW stylesheet, nbd, right?
import { hackyStyleSheet } from "./tw.js";

// Goal was to avoid document.createElement chains. They're hard to read and maintain
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
			// Our first ding against the no-framework approach. List rendering.
			// This is the most inneficient approach. We could write a faster way, but you get that for free with frameworks!
			// Really the first ding is variable binding <div>Hello {{msg}}</div>
			// Similar issue, where here you'd need to do something more complex
			headerRow.innerHTML = "";
			for (let header of headers) {
				// Creating an extended 'th'
				const th = document.createElement("th", { is: TablePageTh });
				th.textContent = header.text;
				headerRow.appendChild(th);
			}
		}
		//using setter and getter props to react to data. Can also react to attributes, but they can only handle strings
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
				// more extended components
				let tr = document.createElement("tr", { is: TablePageRow });
				// more setters and getters
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
