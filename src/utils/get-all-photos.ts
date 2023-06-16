import { api } from '@/src/lib/axios';

async function getAllPhotos() {
	const searchParams = '/filter?q=cats';

	const response = await api.get(searchParams);

	const data: PhotoProps[] = response.data.results;

	if (data) {
		return data;
	}

	return [];
}

export { getAllPhotos };
