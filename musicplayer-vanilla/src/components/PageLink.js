/**
 * Native webcomponents api. Everyone calls them Web Components, but in the code they're 'customElements' 🤷
 */
customElements.define(
	"page-link",
	// Extend the <a> tag, here we want all the normal behavior from an anchor, but we're going to modify its behavior
	// to track if its 'href' is the current page 'href' and change the classlist accordingly.
	class PageLink extends HTMLAnchorElement {
		constructor() {
			super();
			// Tailwind recommends abstracting long classnames in components, we can do that here
			this.className = `p-3 text-xl text-zinc-50/80 rounded-md hover:bg-zinc-700/70 flex items-center transition-colors`;
		}

		// Think of this as componentDidMount, onMounted, onMount, mounted, useEffect, etc
		// All elements have a 'connected' property, this is called on Web Components after they've been added to the DOM
		connectedCallback() {
			this.checkActive();
			window.addEventListener("popstate", this.checkActive);
		}

		// removed from the DOM, destroyed, onDestroyed, etc
		disconnectedCallback() {
			window.removeEventListener("popstate", this.checkActive);
		}

		//internal function, using arrow functions so we don't have to mess with context binding
		checkActive = () => {
			if (window.location.href === this.href) {
				this.classList?.add("bg-zinc-700/50");
			} else {
				this.classList?.remove("bg-zinc-700/50");
			}
		};
	},
	{ extends: "a" }
	// Browsers need you to indicate that you're extending a component in three different places
);
