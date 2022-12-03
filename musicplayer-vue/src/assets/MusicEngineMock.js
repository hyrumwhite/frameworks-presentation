import md5 from "md5";

/**
 * @type {import('./MusicEngine').Song[]}
 */
const songs = [
	{
		length: 360000,
		name: "Song 1",
		id: "asdf123",
		album: "Spirits",
		descriptor: "http://example.com/music/1",
		artist: "Nothing More",
	},
	{
		length: 360000,
		name: "Song 2",
		id: "asdf125",
		album: "Spirits",
		descriptor: "http://example.com/music/2",
		artist: "Nothing More",
	},
];

const albumArt = (string, size = 256) =>
	`https://www.gravatar.com/avatar/${md5(string)}?s=${size}&d=identicon`;

/**
 * @type {import('./MusicEngine').MusicEngine}
 */
export default {
	getAlbums() {
		return [
			{
				id: "asdf4345",
				name: "Self Titled",
				artist: "Nothing More",
				get art() {
					return albumArt(this.name);
				},
				songs: songs,
			},
		];
	},
	getSongs() {
		return songs;
	},
	getPlaylists() {
		return [
			{
				id: "poiu765",
				name: "Workout Mix",
				songs,
			},
		];
	},
};
