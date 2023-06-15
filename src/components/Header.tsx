export function Header() {
	return (
		<header className="self-start py-2 px-9 w-fit bg-zinc-300 rounded-xl">
			<h1 className="text-xl font-black text-orange-500 uppercase">
				Cat<span className="font-bold text-zinc-900">gallery</span>
			</h1>

			<p>
				created by{' '}
				<a
					href="https://lucianosants.dev"
					target="_blank"
					rel="noopener noreferrer"
					className="text-orange-500 hover:text-orange-400"
				>
					lucianosants
				</a>
			</p>
		</header>
	);
}
