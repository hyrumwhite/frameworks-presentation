const name = "albums-page";
export default name;

import { musicStore } from "../assets/musicStore.js";
import TablePage, { slots } from "./TablePage.js";
customElements.define(
	name,
	class AlbumsPage extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			this.classList.add("flex-1", "flex", "flex-col");
			this.innerHTML = /*html*/ `
				<${TablePage} class="flex-1">
					<span ${slots.h1}>Albums</span>
					<span slot="td_length">hi</span>
				</${TablePage}>
			`;
		}
		async connectedCallback() {
			this.render();
			const tablePage = this.querySelector(TablePage);
			const headers = [
				{ text: "Name", value: "name" },
				{ text: "Artist", value: "artist" },
				{ text: "Album", value: "album" },
				{ text: "Length", value: "length" },
			];
			tablePage.headers = headers;
			musicStore.get("songs", (songs) => {
				tablePage.items = songs;
			});
			musicStore.fetch("songs");
		}
	}
);
