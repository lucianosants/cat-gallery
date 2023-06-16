import { Modal, PhotoFrame } from '@/src/components';
import { getAPhoto } from '@/src/utils/get-a-photo';

export default async function Photo({ params }: PhotoPageProps) {
	const { id } = params;

	const { source, alt } = await getAPhoto(id);

	return (
		<Modal>
			<PhotoFrame source={source as string} alt={alt as string} />
		</Modal>
	);
}
