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
            GameId: '6abcdaaetawetawetawe',
            GameName: '연인을 위한 대화카드',
            GameDescription: '커플끼리 해보면 좋을 대화카드입니다.',
            GameBgColor: '#8B1874',
            tags: [
                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
                    tagName: '결혼',
                },                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
                    tagName: '결혼',
                },                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
                    tagName: '결혼',
                },
            ]
        },
        {
            GameId: '1234567asdsad',
            GameName: '친구와 함꼐하기 좋은 대화카드',
            GameDescription: '친구와 함꼐 해보면 좋을 대화카드입니다.',
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
            ]
        }
    ]
};

export const getThemeInfo = (): ThemeInfoType => {
	return ThemeInfoTempData;
};
