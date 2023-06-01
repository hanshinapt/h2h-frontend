import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { getThemes } from '@/api/MainThemeAPI';

interface ThemeType {
	themeId: string;
	themeName: string;
	themeIcon: string;
}
interface ThemeButtonProps {
	name: string;
	iconName: string;
}

const ThemeButtonGroupComponent = () => {
	const themes = getThemes();

	return (
		<ThemeButtonGroupContainer>
			<Header>안녕하세요! {'\n'} 대화하고 싶은 테마를 선택하세요.</Header>

			<ThemeButtonSection>
				{themes.map(({ id, name, icon }) => {
					return <ThemeButtonComponent key={id} name={name} iconName={icon} />;
				})}
			</ThemeButtonSection>
		</ThemeButtonGroupContainer>
	);
};

const ThemeButtonComponent = ({ name, iconName }: ThemeButtonProps) => {
	return (
		<ThemeButton>
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
`;

const ThemeButtonSection = styled.View`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
	gap: 20px;
	padding-top: 20px;
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
