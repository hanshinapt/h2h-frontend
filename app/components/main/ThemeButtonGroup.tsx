import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import { getThemes, ThemeDataType, ThemeInfoType } from '@/api/MainThemeAPI';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { tagState } from '@/store/GameStore';

interface ThemeButtonGroupProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}
interface ThemeButtonProps {
	id: string;
	name: string;
	iconName: string;
	moveThemePage: ({ id, name }: ThemeDataType) => void;
}

const ThemeButtonGroupComponent = ({ navigation }: ThemeButtonGroupProps) => {
	const [themes, setThemes] = useState<ThemeInfoType[]>([]);
	const setTag = useSetRecoilState(tagState);

	const moveThemePage = ({ id, name }: ThemeDataType) => {
		navigation.navigate('Theme');
		setTag({ id, name });
	};

	const fetchThemes = async () => {
		const data = await getThemes();
		setThemes([...data]);
	};

	useEffect(() => {
		fetchThemes();
	}, []);

	return (
		<ThemeButtonGroupContainer>
			<Header>안녕하세요! {'\n'} 대화하고 싶은 테마를 선택하세요.</Header>
			<ThemeButtonSection>
				{themes.map(({ id, name, icon }) => (
					<ThemeButtonComponent
						key={id}
						id={id}
						name={name}
						iconName={icon}
						moveThemePage={moveThemePage}
					/>
				))}
			</ThemeButtonSection>
		</ThemeButtonGroupContainer>
	);
};

const ThemeButtonComponent = ({
	id,
	name,
	iconName,
	moveThemePage,
}: ThemeButtonProps) => {
	return (
		<ThemeButton onPress={() => moveThemePage({ id, name })}>
			<Icon name={iconName} size={20} color="#06ae53" />
			<ThemeButtonText>{name}</ThemeButtonText>
		</ThemeButton>
	);
};

export default ThemeButtonGroupComponent;

const ThemeButtonGroupContainer = styled.View`
	width: 100%;
`;

const Header = styled.Text`
	font-weight: bold;
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	margin-bottom: 20px;
`;

const ThemeButtonSection = styled.View`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
	gap: 20px;
`;

const ThemeButton = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 45%;
	padding: 12px;
	gap: 6px;
	border: 1px solid #dcdcdc;
	border-radius: 8px;
`;

const ThemeButtonText = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: black;
	text-align: center;
`;
