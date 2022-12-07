//set up that import process
const name = "songs-page";
export default name;

import { msToSongLength } from "../assets/msToSongLength.js";

//pub sub store
import { musicStore } from "../assets/musicStore.js";

//Fancy slots stuff, "BYOF!" 🍻
import TablePage, { slots } from "./TablePage.js";

customElements.define(
	name,
	class SongsPage extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			this.classList.add("flex-1", "flex", "flex-col");

			// writing POHTML with template literals, no user content here pls
			// Editor support for this is lacking, even without my nonsense,
			// Goal was a pseudo-framework experience.

			this.innerHTML = /*html*/ `
				<${TablePage} class="flex-1">
					<span ${slots.h1}>Songs</span>
				</${TablePage}>
			`;
		}
		async connectedCallback() {
			this.render();
			//get an element reference to the table
			const tablePage = this.querySelector(TablePage);

			const headers = [
				{ text: "Name", value: "name" },
				{ text: "Artist", value: "artist" },
				{ text: "Album", value: "album" },
				{ text: "Length", value: "formattedLength" },
			];
			tablePage.headers = headers;

			// use the pub-sub store to get updates and push it to the Table element
			this.unsubscribe = musicStore.get("songs", (songs) => {
				for (let song of songs) {
					song.formattedLength = msToSongLength(360000);
				}
				// So far, not too bad, to the TablePage component!
				tablePage.items = songs;
			});

			musicStore.fetch("songs");
		}

		disconnectedCallback() {
			this.unsubscribe();
		}
	}
);
