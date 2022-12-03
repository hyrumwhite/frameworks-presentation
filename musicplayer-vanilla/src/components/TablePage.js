import { hackyStyleSheet } from "./tw.js";
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
			let index = 0;
			for (let header of headers) {
				const th = document.createElement("th");
				th.classList.add("text-left", "font-bold", "pr-2");
				if (index === 0) {
					th.classList.add("pr-2", "pl-4");
				} else if (index === headers.length - 1) {
					th.classList.add("pr-4", "pl-2");
				} else {
					th.classList.add("px-2");
				}
				th.textContent = header.text;
				headerRow.appendChild(th);
				index += 1;
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
			let rowIndex = 0;
			for (let item of items) {
				let tr = document.createElement("tr");
				tr.classList.add("cursor-pointer", "rounded-md", "group/row");
				let index = 0;
				for (let header of this.headers) {
					let td = document.createElement("td");
					td.classList.add(
						"text-left",
						"py-2",
						"text-xl",
						"group-hover/row:bg-zinc-900"
					);
					if (index === 0) {
						td.classList.add("pl-4", "pr-2", "rounded-l-full");
					} else if (index === this.headers.length - 1) {
						td.classList.add("pl-2", "pr-4", "rounded-r-full");
					} else {
						td.classList.add("px-2");
					}
					const slot = document.createElement("slot");
					slot.name = `td_${header.value}_${rowIndex}`;
					slot.textContent = item[header.value];
					td.appendChild(slot);
					tr.appendChild(td);
					index += 1;
				}
				tableBody.appendChild(tr);
				rowIndex += 1;
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
