import Image from 'next/image';

type ImageType = {
	source: string;
	alt: string;
};

export function PhotoFrame({ source, alt }: ImageType) {
	return (
		<Image
			src={source}
			className="block min-w-[256px] w-auto min-h-[320px] bg-orange-500 h-auto rounded-xl"
			alt={alt}
			height={320}
			width={256}
		/>
	);
}
