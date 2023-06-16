import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from '@/src/components';
import { getAllPhotos } from '@/src/utils/get-all-photos';

export default async function Home() {
	const photos = await getAllPhotos();

	return (
		<main className="flex flex-col items-center justify-start gap-16 py-6 overflow-x-hidden px-9">
			<section className="relative flex flex-col w-full">
				<Carousel>
					{photos.map(({ id, properties }) => {
						const { image, title } = properties;

						return (
							<Link
								key={id}
								href={`/photos/${id}`}
								className="shrink-0"
							>
								<Image
									src={image.url}
									className="block w-64 bg-orange-500 h-80 rounded-xl"
									width={256}
									height={320}
									alt={title.title[0].text.content}
								/>
							</Link>
						);
					})}
				</Carousel>
			</section>
		</main>
	);
}
