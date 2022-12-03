const name = "songs-page";
export default name;

import { msToSongLength } from "../assets/msToSongLength.js";
import { musicStore } from "../assets/musicStore.js";
import TablePage, { slots } from "./TablePage.js";

customElements.define(
	name,
	class SongsPage extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			this.classList.add("flex-1", "flex", "flex-col");
			this.innerHTML = /*html*/ `
				<${TablePage} class="flex-1">
					<span ${slots.h1}>Songs</span>
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
				{ text: "Length", value: "formattedLength" },
			];
			tablePage.headers = headers;
			musicStore.get("songs", (songs) => {
				for (let song of songs) {
					song.formattedLength = msToSongLength(360000);
				}
				tablePage.items = songs;
			});
			musicStore.fetch("songs");
		}
	}
);
