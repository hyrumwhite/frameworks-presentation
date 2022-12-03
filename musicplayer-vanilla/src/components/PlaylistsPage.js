const name = "playlists-page";
export default name;

import { musicStore } from "../assets/musicStore.js";
import TablePage, { slots } from "./TablePage.js";
customElements.define(
	name,
	class PlaylistsPage extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			this.classList.add("flex-1", "flex", "flex-col");
			this.innerHTML = /*html*/ `
				<${TablePage} class="flex-1">
					<span ${slots.h1}>Playlists</span>
					<span slot="td_length">hi</span>
				</${TablePage}>
			`;
		}
		async connectedCallback() {
			this.render();
			const tablePage = this.querySelector(TablePage);
			const headers = [
				{ text: "Name", value: "name" },
				{ text: "Songs", value: "songCount" },
			];
			tablePage.headers = headers;
			musicStore.get("playlists", (playlists) => {
				tablePage.items = playlists;
			});
			musicStore.fetch("playlists");
		}
	}
);
