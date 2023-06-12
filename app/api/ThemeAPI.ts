import { request } from './config';

export const getGames = async (tagId: string) => {
	const res = await request({
		method: 'GET',
		url: `decks?tag=${tagId}`,
	});

	return res;
};
