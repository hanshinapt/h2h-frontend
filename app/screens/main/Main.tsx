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
				<ThemeButtonGroupComponent navigation={navigation} />
				<GamesButtonGroupComponent
					navigation={navigation}
					title="Best Games"
					games={bestGames}
				/>
				<GamesButtonGroupComponent
					navigation={navigation}
					title="New Games"
					games={newGames}
				/>
			</MainContainer>
		</ScrollView>
	);
};

export default Main;

const MainContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: white;
	padding: 50px 20px 0;
`;
