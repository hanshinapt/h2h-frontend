export interface ThemeInfoType {
    theme : ThemeType[];
}

interface ThemeType {
    themeId: string;
    themeName: string;
    themeIcon: string;
}

const ThemeInfoTempData = {
    theme : [
        {
            themeId: 'asdfdasv666sdaf',
            themeName: '여행',
            themeIcon: 'aircraft',
        },
        {
            themeId: 'sedsad123',
            themeName: '사랑',
            themeIcon: 'heart',
        },
        {
            themeId: 'dsfhg3423',
            themeName: '취미',
            themeIcon: 'star',
        },
        {
            themeId: '132r54ttgsd',
            themeName: '자기개발',
            themeIcon: 'trophy',
        },
        {
            themeId: 'afhrh5342',
            themeName: '가치관',
            themeIcon: 'thumbs',
        },
        {
            themeId: 'gjlasl133',
            themeName: '친구',
            themeIcon: 'slideshare',
        },
        {
            themeId: 'dafkjl1344',
            themeName: '가족',
            themeIcon: 'home',
        },
        {
            themeId: 'cxznadsf123',
            themeName: '커리어',
            themeIcon: 'suitcase',
        },
        {
            themeId: 'cxznadsf123',
            themeName: '랜덤',
            themeIcon: 'help',
        },
        {
            themeId: 'cxznadsf123',
            themeName: '랜덤',
            themeIcon: 'help',
        },
        {
            themeId: 'cxznadsf123',
            themeName: '랜덤',
            themeIcon: 'help',
        },
        {
            themeId: 'cxznadsf123',
            themeName: '랜덤',
            themeIcon: 'help',
        },
        
    ]
}

export const getThemeInfo = (): ThemeInfoType => {
    return ThemeInfoTempData;
}
