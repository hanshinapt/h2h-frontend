import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { StackParamList } from '@/App';
import GameButton from '@/components/theme/ThemeGameButton';
import { getGames } from '@/api/ThemeAPI';
import { useRecoilValue } from 'recoil';
import { tagState } from '@/store/GameStore';
import ArrowBackButton from '@/components/common/ArrowBackButton';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Theme = ({ navigation }: ThemeProps) => {
	const { id, name } = useRecoilValue(tagState);
	const [games, setGames] = useState([]);

	const fetchGames = async () => {
		const res = await getGames(id);
		setGames(res);
	};

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<ThemeContainer>
			<ArrowBackButton onPressBackButton={() => navigation.goBack()} />

			<ThemeTitleContainer>
				<ThemeTitle>{`# ${name}`}</ThemeTitle>
			</ThemeTitleContainer>

			<ScrollView>
				<ThemeGames>
					{games.map(({ id, title, description, imageUrl }) => (
						<GameButton
							key={id}
							navigation={navigation}
							id={id}
							title={title}
							description={description}
							imageUrl={imageUrl}
						/>
					))}
				</ThemeGames>
			</ScrollView>
		</ThemeContainer>
	);
};

export default Theme;

const ThemeContainer = styled.View`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 50px 20px 0;
	background-color: white;
	gap: 20px;
`;

const ThemeTitleContainer = styled.View`
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ThemeTitle = styled.Text`
	font-size: 23px;
	font-weight: bold;
	color: black;
`;

const ThemeGames = styled.View``;
