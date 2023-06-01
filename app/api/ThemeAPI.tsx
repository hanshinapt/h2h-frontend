export interface ThemeInfoType {
	themeId: string;
	themeName: string;
	themeIconName: string;
	themeGames: GamesType[];
}

export interface GamesType {
	GameId: string;
	GameName: string;
	GameDescription: string;
	GameBgColor: string;
	tags: TagType[];
}

export interface TagType {
	tagId: string;
	tagName: string;
}

const ThemeInfoTempData = {
	themeId: 'asdfdasv666sdaf',
	themeName: '여행',
	themeIconName: 'aircraft',
	themeGames: [
		{
			GameId: '1',
			GameName: '연인을 위한 대화카드',
			GameDescription: '커플끼리 해보면 좋을 대화카드입니다.',
			GameBgColor: '#8B1874',
			tags: [
				{
					tagId: '1',
					tagName: '사랑',
				},
				{
					tagId: '2',
					tagName: '결혼',
				},
				{
					tagId: '3',
					tagName: '사랑',
				},
				{
					tagId: '4',
					tagName: '결혼',
				},
				{
					tagId: '5',
					tagName: '사랑',
				},
				{
					tagId: '6',
					tagName: '결혼',
				},
			],
		},
		{
			GameId: '2',
			GameName: '친구와 함께하기 좋은 대화카드',
			GameDescription:
				'친구와 함께 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다.',
			GameBgColor: '#917FB3',
			tags: [
				{
					tagId: 'tagId1',
					tagName: '친구',
				},
				{
					tagId: 'tagId2',
					tagName: '우정',
				},
			],
		},
		{
			GameId: '3',
			GameName: '친구와 함께하기 좋은 대화카드',
			GameDescription: '친구와 함께 해보면 좋을 대화카드입니다.',
			GameBgColor: '#917FB3',
			tags: [
				{
					tagId: 'tagId1',
					tagName: '친구',
				},
				{
					tagId: 'tagId2',
					tagName: '우정',
				},
			],
		},
		{
			GameId: '4',
			GameName: '친구와 함께하기 좋은 대화카드',
			GameDescription: '친구와 함께 해보면 좋을 대화카드입니다.',
			GameBgColor: '#917FB3',
			tags: [
				{
					tagId: 'tagId1',
					tagName: '친구',
				},
				{
					tagId: 'tagId2',
					tagName: '우정',
				},
			],
		},
		{
			GameId: '5',
			GameName: '친구와 함께하기 좋은 대화카드',
			GameDescription: '친구와 함께 해보면 좋을 대화카드입니다.',
			GameBgColor: '#917FB3',
			tags: [
				{
					tagId: 'tagId1',
					tagName: '친구',
				},
				{
					tagId: 'tagId2',
					tagName: '우정',
				},
			],
		},
	],
};

export const getThemeInfo = (): ThemeInfoType => {
	return ThemeInfoTempData;
};
