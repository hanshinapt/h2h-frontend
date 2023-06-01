export interface ThemeInfoType {
    id: string;
    name: string;
    icon: string;
}

type ThemeDataType = {
    id: string;
    name: string;
}[];

interface ThemeIconType {
  [key: string]: string;
}

const ThemeData: ThemeDataType = [
    {
        id: 'asdfdasv666sdaf',
        name: '여행',
    },
    {
        id: 'sedsad123',
        name: '사랑',
    },
    {
        id: 'dsfhg3423',
        name: '취미',
    },
    {
        id: '132r54ttgsd',
        name: '자기개발',
    },
    {
        id: 'afhrh5342',
        name: '가치관',
    },
    {
        id: 'gjlasl133',
        name: '친구',
    },
    {
        id: 'dafkjl1344',
        name: '가족',
    },
    {
        id: 'cxznadsf123',
        name: '커리어',
    },
    {
        id: 'cxznadsf3123',
        name: '랜덤',
    },
    {
        id: 'cxznadsf1123',
        name: '랜덤',
    },
    {
        id: 'cxznads5f123',
        name: '랜덤',
    },
    {
        id: 'cxznad7sf123',
        name: '랜덤',
    },
];

const ThemeIcon : ThemeIconType = {
    '여행' : 'aircraft',
    '사랑' : 'heart',
    '취미' : 'star',
    '자기개발' : 'trophy',
    '가치관' : 'thumbs-up',
    '친구' : 'slideshare',
    '가족' : 'home',
    '커리어' : 'suitcase',
    '랜덤' : 'help', 
}

const ThemeInfo: ThemeInfoType[] = ThemeData.map((theme) => {
  return {
    ...theme,
    icon: ThemeIcon[theme.name],
  };
});

export const getThemeInfo = (): ThemeInfoType[] => {
    return ThemeInfo;
}
