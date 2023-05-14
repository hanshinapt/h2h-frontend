export interface NewGameInfoType {
    newGames : NewGameType[];
}

interface NewGameType {
    gameId: string;
    gameName: string;
    gameTags: TagsType[];
}

interface TagsType {
    tagId: string;
    tagName: string;
}

const NewGameInfoTempData = {
    newGames : [
        {
            gameId: 'dsafdasfds',
            gameName: '연인을 위한 대화카드',
            gameTags: [
                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
			        tagName: '결혼',
                }
            ]
        },
        {
            gameId: '1234567asdsad',
            gameName: '친구와 같이하기 좋은 대화카드',
            gameTags: [
                {
                    tagId: 'tagId1',
                    tagName: '친구',
                },
            ]
        },
        {
            gameId: 'dsaffd321ds',
            gameName: '가족과 같이하기 좋은 대화카드',
            gameTags: [
                {
                    tagId: 'tagId1',
                    tagName: '가족',
                },
                {
                    tagId: 'tagId2',
			        tagName: '가치관',
                }
            ]
        },
    ]
}

export const getNewGamesInfo = (): NewGameInfoType => {
    return NewGameInfoTempData;
}