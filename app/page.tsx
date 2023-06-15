import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from '@/src/components';

function FakeItem() {
	return (
		<Link href="/photos/1" className="shrink-0">
			<Image
				src="https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				className="block w-64 bg-orange-500 h-80 rounded-xl"
				width={256}
				height={320}
				alt=""
			/>
		</Link>
	);
}

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-start gap-16 py-6 overflow-x-hidden px-9">
			<section className="relative flex flex-col w-full">
				<Carousel>
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
					<FakeItem />
				</Carousel>
			</section>
		</main>
	);
}
