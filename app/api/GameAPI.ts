import { request } from './config';

export const getGameInfo = async (deckId: string) => {
	const res = await request({
		method: 'GET',
		url: `decks/${deckId}`,
	});

	return res;
};

export const getGameQuestions = async (deckId: string) => {
	const res = await request({
		method: 'GET',
		url: `decks/${deckId}`,
	});

	return res;
};
