export interface BestGameInfoType {
    bestGames : BestGameType[];
}

interface BestGameType {
    gameId: string;
    gameName: string;
    gameTags: TagsType[];
}

interface TagsType {
    tagId: string;
    tagName: string;
}

const BestGameInfoTempData = {
    bestGames : [
        {
            gameId: 'dsafdasfds',
            gameName: '연인을 위한 연인을 위한 연인을 위한 대화카드 대화카드',
            gameTags: [
                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
			        tagName: '결혼',
                },
                {
                    tagId: 'tagId3',
			        tagName: '우정',
                },
                {
                    tagId: 'tagId4',
			        tagName: '신뢰',
                },
                                {
                    tagId: 'tagId1',
                    tagName: '사랑',
                },
                {
                    tagId: 'tagId2',
			        tagName: '결혼',
                },
                {
                    tagId: 'tagId3',
			        tagName: '우정',
                },
                {
                    tagId: 'tagId4',
			        tagName: '신뢰',
                },
            ]
        },
        {
            gameId: '1234567asdsad',
            gameName: '친구와 함꼐하기 좋은 대화카드',
            gameTags: [
                {
                    tagId: 'tagId1',
                    tagName: '친구',
                },
                {
                    tagId: 'tagId2',
			        tagName: '우정',
                },
                {
                    tagId: 'tagId2',
			        tagName: '신뢰',
                },
            ]
        },
        {
            gameId: 'dsaffd321ds',
            gameName: '가족과 함꼐하기 좋은 대화카드',
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

export const getBestGamesInfo = (): BestGameInfoType => {
    return BestGameInfoTempData;
}