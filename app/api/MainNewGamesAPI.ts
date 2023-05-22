import { GamesInfoType } from '@/api/MainBestGamesAPI';

const NewGamesData = [
    {
        id: "6abcdaaetawetawetawe",
        title: "뉴게임 테스트 / 밸런스밸런스",
        description: "커플끼리 해보면 좋을 대화카드입니다.",
        tags: [
            {
                id: "BalanceTagId",
                name: "밸런스"
            }, 
            {
                id: "MarryTagId",
                name: "wow"
            }
        ],
        questions: [
            {
                content: "연인 질문 리스트"
            }
        ],
	    createdAt: '2023-03-12',
    },
    {
        id: "6abcppsdgasdgadsgasd",
        title: "424242424242 42 424 242",
        description: "가족끼리 해보면 좋을 대화카드입니다.",
        tags: [
            {
                id: "FamilyTagId",
                name: "가족"
            },
            {
                id: "ValuesTagId",
                name: "가치관"
            }
        ],
        questions: [
            {
                content: "가족은 당신에게 어떤 의미가 있나요?"
            }
        ],
        createdAt: '2023-03-12',
    },
    {
        id: "6abcppsffffffffsd",
        title: "친구와 같이하기 좋은 대화카드",
        description: "가족끼리 해보면 좋을 대화카드입니다.",
        tags: [
            {
                id: "FriendTagId",
                name: "친구"
            }
        ],
        questions: [
            {
                content: "가족은 당신에게 어떤 의미가 있나요?"
            }
        ],
        createdAt: '2023-03-12',
    },
]

export const getNewGamesInfo = (): GamesInfoType[] => {
    return NewGamesData;
}
