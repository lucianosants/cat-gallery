import { Modal, PhotoFrame } from '@/src/components';

export default function Photo() {
	const image = {
		source: 'https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		alt: 'A picture of me',
	};
	return (
		<Modal>
			<PhotoFrame source={image.source} alt={image.alt} />
		</Modal>
	);
}
