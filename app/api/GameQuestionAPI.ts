const GameQuestionsTempData = {
	deckId: '6abcdaaetawetawetawe',
	title: '연인을 위한 대화카드',
	questions: [
		{
			id: 0,
			content:
				'현재 나의 최대 관심사는 무엇인가요? 관심사에 어떻게 얼마나 투자하고 있으신가요?',
		},
		{
			id: 1,
			content: '현재 나의 최대 관심사는 무엇인가요?',
		},
		{
			id: 2,
			content: '관심사에 어떻게 얼마나 투자하고 있으신가요?',
		},
	],
};

export const getGameQuestions = (deckId: string) => {
	return GameQuestionsTempData;
};
