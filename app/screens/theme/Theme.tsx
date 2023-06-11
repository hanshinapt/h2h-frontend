import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import ThemeGameButton from '@/components/theme/ThemeGameButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { getThemeGames } from '@/api/ThemeAPI';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
	route: {
		params: {
			id: string;
			name: string;
		};
	};
}

const Theme = ({ navigation, route }: ThemeProps) => {
	const { id, name } = route.params;
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const data = await getThemeGames(id);
			setGames(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ThemeContainer>
			<ScrollView>
				<ArrowBackButton onPress={navigation.goBack}>
					<Icon name="arrow-back-outline" size={30} color="#a1a1a1" />
				</ArrowBackButton>

				<ThemeTitleContainer>
					<ThemeTitle>{`# ${name}`}</ThemeTitle>
				</ThemeTitleContainer>

				<ThemeGames>
					{games.map(({ id, title, description, imageUrl }) => (
						<ThemeGameButton
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
	min-height: 100%;
	background-color: white;
	padding: 16px;
`;

const ArrowBackButton = styled.TouchableOpacity`
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
`;

const ThemeTitleContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;

const ThemeTitle = styled.Text`
	font-size: 23px;
	font-weight: bold;
	color: black;
`;

const ThemeGames = styled.View``;
