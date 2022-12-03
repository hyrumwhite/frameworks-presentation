customElements.define(
	"page-link",
	class PageLink extends HTMLAnchorElement {
		constructor() {
			super();
			this.className = `p-3 text-xl text-zinc-50/80 rounded-md hover:bg-zinc-700/70 flex items-center transition-colors`;
		}
		connectedCallback() {
			this.checkActive();
			window.addEventListener("popstate", this.checkActive);
		}
		disconnectedCallback() {
			window.removeEventListener("popstate", this.checkActive);
		}
		checkActive = () => {
			if (window.location.href === this.href) {
				this.classList?.add("bg-zinc-700/50");
			} else {
				this.classList?.remove("bg-zinc-700/50");
			}
		};
	},
	{ extends: "a" }
);
