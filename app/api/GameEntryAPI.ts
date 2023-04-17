export interface GameInfoType {
	id: string;
	title: string;
	description: string;
	tags: TagsType[];
	questions: QuestionType[];
	createdAt: string;
}

interface TagsType {
	id: string;
	name: string;
}

interface QuestionType {
	content: string;
}

const GameInfoTempData = {
	id: '6abcdaaetawetawetawe',
	title: '연인을 위한 대화카드',
	description: '커플끼리 해보면 좋을 대화카드입니다.',
	tags: [
		{
			id: 'tagId1',
			name: '사랑',
		},
		{
			id: 'tagId2',
			name: '결혼',
		},
	],
	questions: [
		{
			content: '현재 나의 최대 관심사는 무엇인가요?',
		},
		{
			content: '현재 나의 최대 관심사는 무엇인가요?',
		},
		{
			content: '현재 나의 최대 관심사는 무엇인가요?',
		},
	],
	createdAt: '2023-03-12',
};

export const getGameInfo = (): GameInfoType => {
	return GameInfoTempData;
};
