import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import ThemeGameButton from '@/components/theme/ThemeGameButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import { getThemeGames } from '@/api/ThemeAPI';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
	route: {
        params: {
            id : string,
            name: string,
        }
    }
}

const Theme = ({ navigation, route }: ThemeProps) => {
	const {id, name } = route.params; 
	const themeGames = getThemeGames();

	return (
		<ScrollView>
			<ThemeContainer>
				<ThemeTitleContainer>
					<ThemeTitle>{`# ${name}`}</ThemeTitle>
				</ThemeTitleContainer>

				<ThemeGames>
					{themeGames.map(({ id, title, description }) => (
						<ThemeGameButton key={id} navigation={navigation} id={id} title={title} description={description} />
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
