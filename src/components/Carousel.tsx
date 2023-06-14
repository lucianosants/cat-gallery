'use client';

import { ReactNode, useRef } from 'react';
import { Button } from '@/src/components';
import { ArrowLeft, ArrowRight } from '@/src/assets';

type CarouselType = {
	children: ReactNode;
};

export function Carousel({ children }: CarouselType) {
	const carousel = useRef<HTMLDivElement>(null);

	const handleMoveToLeft = () => {
		carousel.current!.scrollLeft -= carousel.current!.offsetWidth;
	};

	const handleMoveToRight = () => {
		carousel.current!.scrollLeft += carousel.current!.offsetWidth;
	};

	return (
		<div className="relative flex flex-col w-full">
			<Button
				title="left button"
				to="left-0"
				bg="bg-gradient-to-l"
				onClick={handleMoveToLeft}
			>
				<ArrowLeft />
			</Button>

			<Button
				title="right button"
				to="right-0"
				bg="bg-gradient-to-r"
				onClick={handleMoveToRight}
			>
				<ArrowRight />
			</Button>

			<div
				className="flex w-full gap-4 pb-4 overflow-x-auto border rounded-xl scroll-smooth scroll-hidden"
				ref={carousel}
			>
				{children}
			</div>
		</div>
	);
}
