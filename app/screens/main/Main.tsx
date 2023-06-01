import styled from 'styled-components/native';
import { ScrollView, Button } from 'react-native';
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

	const bestGames: GamesInfoType[] = getBestGamesInfo();
	const newGames: GamesInfoType[] = getNewGamesInfo();

	return (
		<ScrollView showsHorizontalScrollIndicator={false}>
			<MainContainer>
				<ThemeButtonGroupComponent />
				<GamesButtonGroupComponent title="Best Games" games={bestGames} />
				<GamesButtonGroupComponent title="Best Games" games={newGames} />
			</MainContainer>

			<Button title="Theme" onPress={() => navigation.navigate('Theme')} />
		</ScrollView>
	);
};

export default Main;

const MainContainer = styled.View`
	background-color: white;
	padding: 20px;
`;
