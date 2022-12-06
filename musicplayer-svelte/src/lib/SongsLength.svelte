<script>
	import { msToSongLength } from "../assets/msToSongLength";
	export let item = {};
	export let value = [];
	let length = "";
	const getLength = (songs) => {
		if (songs) {
			return msToSongLength(
				songs.reduce((acc, value) => acc + value.length, 0)
			);
		} else {
			return "";
		}
	};

	$: length = getLength(value);

	const handleClick = () => {
		alert("clicked!");
	};
</script>

<button on:click={handleClick}>{length}</button>
