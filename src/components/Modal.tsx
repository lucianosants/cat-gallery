'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type ModalType = {
	children: ReactNode;
};

export function Modal({ children }: ModalType) {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center w-full h-full">
			<div
				className="absolute top-0 bottom-0 left-0 right-0 z-10 flex w-full h-full bg-zinc-900/70 backdrop-blur-sm"
				onClick={handleBack}
			/>

			<div className="z-20 flex items-center justify-center p-3 mx-auto">
				{children}
			</div>
		</div>
	);
}
