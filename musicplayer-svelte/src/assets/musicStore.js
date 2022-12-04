import { musicService } from "./musicService";
const get = {
	songs() {
		return musicService.getSongs();
	},
	playlists() {
		return musicService.getPlaylists();
	},
	albums() {
		return musicService.getAlbums();
	},
};

/**
 * @typedef {'songs' | 'albums' | 'playlists'} StoreVariables
 */
export const musicStore = {
	/**@type {{[key: string]: (() => void)[]}} */
	_subscriptions: {},
	/**@type {function(StoreVariables, function(Array):void, boolean): function():void} */
	async get(type, fn, immediate = true) {
		this._subscriptions[type] = this._subscriptions[type] || [];
		const subscriptions = this._subscriptions[type];
		subscriptions.push(fn);
		if (immediate) {
			fn(this[type]);
		}
		return () => {
			let index = 0;
			for (let sub of subscriptions) {
				if (sub === fn) {
					subscriptions.splice(index, 1);
					break;
				}
				index += 1;
			}
		};
	},
	async fetch(type) {
		const value = await get[type]();
		this[type] = value;
		this._notify(type);
	},
	_notify(type) {
		const subscriptions = this._subscriptions[type];
		for (let sub of subscriptions) {
			sub(this[type]);
		}
	},
	/** @type {function(StoreVariables, Array):void} */
	set(type, value) {
		this[type] = value;
	},
	songs: [],
	albums: [],
	playlists: [],
};
