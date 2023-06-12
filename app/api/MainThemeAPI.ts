import { request } from './config';

export interface ThemeInfoType {
	id: string;
	name: string;
	icon: string;
}

export type ThemeDataType = {
	id: string;
	name: string;
};

interface ThemeIconType {
	[key: string]: string;
}

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

export const getThemes = async () => {
	const res = await request({
		method: 'GET',
		url: 'tags',
	});

	// 임시 코드
	const temp = res.map((i: ThemeDataType) => {
		return { ...i, icon: ThemeIcon[i.name] };
	});

	return temp;
};
