export interface ThemeInfoType {
    themeId: string;
    themeName: string;
    themeIcon: string;
}

type ThemeDataType = {
    themeId: string;
    themeName: string;
}[];

interface ThemeIconType {
  [key: string]: string;
}

const ThemeData: ThemeDataType = [
    {
        themeId: 'asdfdasv666sdaf',
        themeName: '여행',
    },
    {
        themeId: 'sedsad123',
        themeName: '사랑',
    },
    {
        themeId: 'dsfhg3423',
        themeName: '취미',
    },
    {
        themeId: '132r54ttgsd',
        themeName: '자기개발',
    },
    {
        themeId: 'afhrh5342',
        themeName: '가치관',
    },
    {
        themeId: 'gjlasl133',
        themeName: '친구',
    },
    {
        themeId: 'dafkjl1344',
        themeName: '가족',
    },
    {
        themeId: 'cxznadsf123',
        themeName: '커리어',
    },
    {
        themeId: 'cxznadsf3123',
        themeName: '랜덤',
    },
    {
        themeId: 'cxznadsf1123',
        themeName: '랜덤',
    },
    {
        themeId: 'cxznads5f123',
        themeName: '랜덤',
    },
    {
        themeId: 'cxznad7sf123',
        themeName: '랜덤',
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
    themeIcon: ThemeIcon[theme.themeName],
  };
});

export const getThemeInfo = (): ThemeInfoType[] => {
    return ThemeInfo;
}
