export interface ThemeInfoType {
	id: string;
	name: string;
	icon: string;
};

type ThemeDataType = {
	id: string;
	name: string;
};

interface ThemeIconType {
	[key: string]: string;
};

const ThemeIcon: ThemeIconType = {
	여행: 'aircraft',
	사랑: 'heart',
	취미: 'star',
	자기개발: 'trophy',
	가치관: 'thumbs-up',
	친구: 'slideshare',
	우정: 'slideshare',
	가족: 'home',
	커리어: 'suitcase',
	랜덤: 'help',
};

export const getTheme = async () => {
	try {
		const response = await fetch('http://ec2-18-222-196-33.us-east-2.compute.amazonaws.com:8080/api/v1/tags');
		if (!response.ok) {
      		throw new Error('Network response was not ok');
    	}
		const data = await response.json();
		const themeData: ThemeDataType[] = data;
		const themeInfo: ThemeInfoType[] = themeData.map((theme) => {
			return {
				...theme,
				icon: ThemeIcon[theme.name]
			}
		});
		return themeInfo;
	}
	catch (error) {
		console.error(error);
		throw error;
	}
};
