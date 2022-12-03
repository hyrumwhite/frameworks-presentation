import SongsPage from "./src/components/SongsPage.js";
import AlbumsPage from "./src/components/AlbumsPage.js";
import PlaylistsPage from "./src/components/PlaylistsPage.js";

const routes = [
	{ path: "/", element: SongsPage },
	{ path: "/albums", element: AlbumsPage },
	{ path: "/playlists", element: PlaylistsPage },
];

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
loadRoute(window.location);
