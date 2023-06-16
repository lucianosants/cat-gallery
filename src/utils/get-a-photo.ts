import { api } from '@/src/lib/axios';

async function getAPhoto(id: string) {
	const searchParams = `/photos/${id}`;

	const response = await api.get(searchParams);

	const data: PhotoProps = response.data;

	if (data) {
		return {
			source: data.properties.image.url,
			alt: data.properties.title.title[0].text.content,
		};
	}

	return {};
}

export { getAPhoto };
