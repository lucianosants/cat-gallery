import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/src/components';

const inter = Inter({ subsets: ['latin'] });

type RootLayoutType = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export const metadata = {
	title: 'Cat Gallery',
	description: 'Uma galeria com imagens apenas de gatos.',
};

export default function RootLayout({ children, modal }: RootLayoutType) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="py-6 px-9">
					<Header />
				</div>

				{children}
				{modal}
			</body>
		</html>
	);
}
