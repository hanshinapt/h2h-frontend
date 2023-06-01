import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { getThemeInfo } from '@/api/ThemeAPI';
import ThemeGameButton from '@/components/theme/ThemeGameButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Theme = ({ navigation }: ThemeProps) => {
	const { themeId, themeName, themeGames } = getThemeInfo();

	return (
		<ScrollView>
			<ThemeContainer>
				<ThemeTitleContainer>
					<ThemeTitle>{`# ${themeName}`}</ThemeTitle>
				</ThemeTitleContainer>

				<ThemeGames>
					{themeGames.map(({ GameId, GameName, GameDescription }) => (
						<ThemeGameButton
							key={GameId}
							name={GameName}
							description={GameDescription}
						/>
					))}
				</ThemeGames>
			</ThemeContainer>
		</ScrollView>
	);
};

export default Theme;

const ThemeContainer = styled.View`
	min-height: 100%;
	background-color: white;
	padding: 16px;
`;

const ThemeTitleContainer = styled.Text`
	display: flex;
	font-size: 25px;
	font-weight: bold;
	color: black;
	margin: 5px 5px 10px 5px;
`;

const ThemeTitle = styled.Text``;

const ThemeGames = styled.View`
	gap: 14px;
`;
