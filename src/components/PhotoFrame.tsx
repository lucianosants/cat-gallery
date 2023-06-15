import Image from 'next/image';

type ImageType = {
	source: string;
	alt: string;
};

export function PhotoFrame({ source, alt }: ImageType) {
	return (
		<Image
			src={source}
			className="block w-auto h-auto rounded-xl"
			alt={alt}
			height={320}
			width={256}
		/>
	);
}
