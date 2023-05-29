export interface ThemeListType {
    id: string;
    title: string;
    description: string;
    tags: TagType[];
}

export interface TagType {
    id: string;
    name: string;
}

const ThemeInfoTempData = [
    {
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
            {
                id: 'tagId1',
                name: '사랑',
            },
            {
                id: 'tagId2',
                name: '결혼',
            },                
            {
                id: 'tagId1',
                name: '사랑',
            },
            {
                id: 'tagId2',
                name: '결혼',
            },
        ]
    },
    {
        id: '1234567asdsad',
        title: '친구와 함꼐하기 좋은 대화카드',
        description: '친구와 함꼐 해보면 좋을 대화카드입니다.',
        tags: [
            {
                id: 'tagId1',
                name: '친구',
            },
            {
                id: 'tagId2',
                name: '우정',
            },
        ]
    }
];

export const getThemeList = (): ThemeListType[] => {
	return ThemeInfoTempData;
};
