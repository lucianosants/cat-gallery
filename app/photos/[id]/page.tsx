import Image from 'next/image';
import Link from 'next/link';

export default function page({ params }: { params: { id: string } }) {
	return (
		<main className="flex flex-col items-center justify-center px-9">
			<Link
				href="/"
				className="flex items-center self-start gap-4 px-4 py-2 mb-8 border border-black rounded-lg hover:bg-zinc-300"
			>
				&larr; Home
			</Link>

			<Image
				src="https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				alt=""
				height={320}
				width={250}
			/>
		</main>
	);
}
