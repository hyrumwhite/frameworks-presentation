import { Link } from "react-router-dom";

export function PageLink({ to, children }) {
	<span
		classname="
			p-3
			text-xl text-zinc-50/80
			rounded-md
			hover:bg-zinc-700/70
			flex
			items-center
			transition-colors
		"
		active-class="bg-zinc-700/50"
	>
		<Link classname="page-link" to={to}>
			{children}
		</Link>
	</span>;
}
