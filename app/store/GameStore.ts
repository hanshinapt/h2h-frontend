import { atom } from 'recoil';

export const deckIdState = atom({
	key: 'deckId',
	default: '',
});

export const tagState = atom({
	key: 'tag',
	default: { id: '', name: '' },
});

export const questionsState = atom({
	key: 'questions',
	default: [{ content: '' }],
});
