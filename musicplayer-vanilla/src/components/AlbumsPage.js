const name = "albums-page";
export default name;

import { musicStore } from "../assets/musicStore.js";
import TablePage, { slots } from "./TablePage.js";
import { msToSongLength } from "../assets/msToSongLength.js";
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
				</${TablePage}>
			`;
		}
		async connectedCallback() {
			this.render();
			const tablePage = this.querySelector(TablePage);
			const headers = [
				{ text: "Name", value: "name" },
				{ text: "Artist", value: "artist" },
				{ text: "Song Count", value: "songCount" },
				{ text: "Length", value: "totalSongLength" },
			];
			tablePage.headers = headers;
			musicStore.get("albums", (albums) => {
				for (let album of albums) {
					album.totalSongLength = msToSongLength(album.length);
				}
				tablePage.items = albums;
			});
			musicStore.fetch("albums");
		}
	}
);
