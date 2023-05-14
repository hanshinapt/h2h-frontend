import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { getThemeInfo } from '@/api/MainThemeAPI';
import { getBestGamesInfo } from '@/api/MainBestGamesAPI';
import { getNewGamesInfo } from '@/api/MainNewGamesAPI';
import ThemeButtonGroupComponent from '@/components/main/ThemeButtonGroup';
import GamesButtonGroupComponent from '@/components/main/GamesButtonGroup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface MainProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Main = ({navigation}: MainProps ) => {
	const { theme } = getThemeInfo();
  const { bestGames } = getBestGamesInfo(); 
  const { newGames } = getNewGamesInfo(); 
	return (
		<MainContainer>
			<ScrollView>
        <ThemeButtonGroupComponent title="Theme" theme={theme}/>
        
        <GamesButtonGroupComponent title="Best Games" games={bestGames}/>
        
        <GamesButtonGroupComponent title="New Games" games={newGames}/>
      </ScrollView>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.View`
  background-color: white;
`;
