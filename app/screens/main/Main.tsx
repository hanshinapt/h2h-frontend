import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { getThemeInfo, ThemeInfoType } from '@/api/MainThemeAPI';
import { getBestGamesInfo, GamesInfoType } from '@/api/MainBestGamesAPI';
import { getNewGamesInfo } from '@/api/MainNewGamesAPI';
import ThemeButtonGroupComponent from '@/components/main/ThemeButtonGroup';
import GamesButtonGroupComponent from '@/components/main/GamesButtonGroup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface MainProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Main = ({ navigation }: MainProps) => {
	const sortType = ['most-liked', 'most-played'];

	const themes: ThemeInfoType[] = getThemeInfo();
	const bestGames: GamesInfoType[] = getBestGamesInfo();
	const newGames: GamesInfoType[] = getNewGamesInfo();

	return (
		<ScrollView showsHorizontalScrollIndicator={false}>
			<MainContainer>
				<ThemeButtonGroupComponent themes={themes} />

				<GamesButtonGroupComponent title="Best Games" games={bestGames} />

				<GamesButtonGroupComponent title="Best Games" games={newGames} />
			</MainContainer>
		</ScrollView>
	);
};

export default Main;

const MainContainer = styled.View`
	background-color: white;
	padding: 20px;
`;
