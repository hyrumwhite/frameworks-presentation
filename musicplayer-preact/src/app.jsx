import { signal } from "@preact/signals";
import preactLogo from "./assets/preact.svg";
import "./app.css";

const count = signal(0);

export function App() {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div class="card">
				<button>count is {count}</button>
				<p>
					Edit <code>src/app.jsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Preact logos to learn more
			</p>
		</>
	);
}
