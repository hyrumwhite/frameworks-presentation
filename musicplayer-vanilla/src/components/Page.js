const name = "base-page";
const declaration = `section is="${name}"`;
export default declaration;
const h1Slot = "h1";
export const slots = {
	h1: `slot="${h1Slot}"`,
};

customElements.define(
	name,
	class BasePage extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			this.className = "p-4 pt-3";
			this.innerHTML = /*html*/ `
				<h1 class="text-4xl"><slot name="${h1Slot}"></slot></h1>
				<slot></slot>
			`;
		}
		connectedCallback() {
			this.render();
		}
	},
	{ extends: "section" }
);
