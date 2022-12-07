// Nothing fancy here, just importing the string names from the components

// The interesting thing with Web Components is that <my-component> can be added to the page and *then* defined
// So you could setup a dynamic import, pop the component name on the page, pop the loading component in it,
// and then after it's defined, the loader would automatically go away
import SongsPage from "./src/components/SongsPage.js";
import AlbumsPage from "./src/components/AlbumsPage.js";
import PlaylistsPage from "./src/components/PlaylistsPage.js";

const routes = [
	{ path: "/", element: SongsPage },
	{ path: "/albums", element: AlbumsPage },
	{ path: "/playlists", element: PlaylistsPage },
];

// if the routes match, create the web-component like any other component
const loadRoute = async ($event = {}) => {
	for (let route of routes) {
		if ($event.pathname === route.path) {
			const element = document.createElement(route.element);

			const routerView =
				document.querySelector("router-view") ||
				document.querySelector(".router-view");

			element.classList.add("router-view");
			return routerView.replaceWith(element);
		}
	}
	return loadRoute({ pathname: routes[0].path });
};

//navigation event boilerplate
function shouldNotIntercept(navigationEvent) {
	return (
		!navigationEvent.canIntercept ||
		// If this is just a hashChange,
		// just let the browser handle scrolling to the content.
		navigationEvent.hashChange ||
		// If this is a download,
		// let the browser perform the download.
		navigationEvent.downloadRequest ||
		// If this is a form submission,
		// let that go to the server.
		navigationEvent.formData
	);
}

// allows fallback for browsers that don't support the nav event (Firefox, Safari 👀)
// could also do a polyfill, but since everything is near native, we just get default anchor behavior here.

if ("navigation" in window) {
	navigation.addEventListener("navigate", (navigateEvent) => {
		// Exit early if this navigation shouldn't be intercepted.
		if (shouldNotIntercept(navigateEvent)) {
			return;
		}
		const url = new URL(navigateEvent.destination.url);
		navigateEvent.intercept({
			handler() {
				loadRoute(url);
			},
		});
	});
}

//check the current route and load its route
loadRoute(window.location);
