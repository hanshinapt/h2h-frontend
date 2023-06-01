export interface GamesType {
	id: string;
	title: string;
	description: string;
	tags: TagType[];
	imageUrl: string;
	questions: any;
}

export interface TagType {
	id: string;
	name: string;
}

const ThemeInfoTempData = {
	id: 'asdfdasv666sdaf',
	name: '여행',
	iconName: 'aircraft',
	games: [
		{
			id: '1',
			name: '연인을 위한 대화카드',
			description: '커플끼리 해보면 좋을 대화카드입니다.',
			tags: [
				{
					id: '1',
					name: '사랑',
				},
				{
					id: '2',
					name: '결혼',
				},
				{
					id: '3',
					name: '사랑',
				},
				{
					id: '4',
					name: '결혼',
				},
				{
					id: '5',
					name: '사랑',
				},
				{
					id: '6',
					name: '결혼',
				},
			],
		},
		{
			id: '2',
			name: '친구와 함께하기 좋은 대화카드',
			description:
				'친구와 함께 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다.',
			tags: [
				{
					id: 'id1',
					name: '친구',
				},
				{
					id: 'id2',
					name: '우정',
				},
			],
		},
		{
			id: '3',
			name: '친구와 함께하기 좋은 대화카드',
			description: '친구와 함께 해보면 좋을 대화카드입니다.',
			tags: [
				{
					id: 'id1',
					name: '친구',
				},
				{
					id: 'id2',
					name: '우정',
				},
			],
		},
		{
			id: '4',
			name: '친구와 함께하기 좋은 대화카드',
			description: '친구와 함께 해보면 좋을 대화카드입니다.',
			tags: [
				{
					id: 'id1',
					name: '친구',
				},
				{
					id: 'id2',
					name: '우정',
				},
			],
		},
		{
			id: '5',
			name: '친구와 함께하기 좋은 대화카드',
			description: '친구와 함께 해보면 좋을 대화카드입니다.',
			tags: [
				{
					id: 'id1',
					name: '친구',
				},
				{
					id: 'id2',
					name: '우정',
				},
			],
		},
	],
};

const ThemeGamesList = [
	{
		id: '6abcdaaetawetawetawe',
		title: '연인을 위한 대화카드',
		description: '커플끼리 해보면 좋을 대화카드입니다.',
		tags: [
			{
				id: 'tagId1',
				name: '사랑',
			},
			{ id: 'tagId2', name: '결혼' },
		],
		imageUrl: 'https://abc.com.photos/300',
		questions: [
			{
				content: '현재 나의 최대 관심사는 무엇인가요?',
			},
		],
	},
	{
		id: '6aweotawepotiawpeitapoiwe',
		title: '연인, 대화가 필요해',
		description: '어색한 연인끼리 해보면 좋을 대화카드입니다.',
		tags: [
			{
				id: 'tagId1',
				name: '사랑',
			},
			{ id: 'tagId2', name: '결혼' },
		],
		imageUrl: 'https://abc.com.photos/150',
		questions: [
			{
				content: '�서로의 첫인상은 어땠나요?',
			},
		],
	},
];

export const getThemeGames = (): GamesType[] => {
	return ThemeGamesList;
};
