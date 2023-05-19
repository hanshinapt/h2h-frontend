export interface GamesInfoType {
    id: string;
    title: string;
    description: string;
    tags: TagsType[];
    questions: QuestionType[];
    createdAt: string;
}

export interface TagsType {
	id: string;
	name: string;
}

interface QuestionType {
	content: string;
}

const BestGamesData = [
    {
        id: "6abcdaaetawetawetawe",
        title: "연인을 위한 대화카드",
        description: "커플끼리 해보면 좋을 대화카드입니다.",
        tags: [
            {
                id: "LoveTagId",
                name: "사랑"
            }, 
            {
                id: "MarryTagId",
                name: "결혼"
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
        title: "가족, 대화가 필요해",
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

export const getBestGamesInfo = (): GamesInfoType[] => {
    return BestGamesData;
}