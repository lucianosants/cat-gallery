import Link from 'next/link';

import { PhotoFrame } from '@/src/components';
import { getAPhoto } from '@/src/utils/get-a-photo';

export default async function PhotoPage({ params }: PhotoPageProps) {
	const { id } = params;

	const { source, alt } = await getAPhoto(id);

	return (
		<main className="flex flex-col items-center justify-center px-9">
			<Link
				href="/"
				className="flex items-center self-start gap-4 px-4 py-2 mb-8 border border-black rounded-lg hover:bg-zinc-300"
			>
				&larr; Home
			</Link>

			<PhotoFrame source={source as string} alt={alt as string} />
		</main>
	);
}
