import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import { getGameInfo } from '@/api/GameEntryAPI';
import ImageComponent from '@/components/common/Image';
import ChipComponent from '@/components/gameEntry/Chip';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButtonComponent from '@/components/common/IconButton';

interface GameEntryProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const GameEntry = ({ navigation }: GameEntryProps) => {
	const { title, tags, description } = getGameInfo();

	return (
		<GameEntryContainer>
			<GameTitle>{title}</GameTitle>

			<GameContentsWrapper>
				<GameImageWrapper>
					<ImageComponent imageUrl={require('@assets/love/love1.jpg')} />
				</GameImageWrapper>
				<GameChipsWrapper>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ gap: 16 }}>
						{tags.map(({ id, name }) => (
							<ChipComponent key={id} text={`# ${name}`} color="#51987F" />
						))}
					</ScrollView>
				</GameChipsWrapper>
				<GameDesc>{description}</GameDesc>
			</GameContentsWrapper>

			<ButtonsContainer>
				<IconButtonComponent
					bgColor="#CCCCCC"
					onPress={() => navigation.goBack()}>
					<Text>뒤로 가기</Text>
					<Icon name="arrow-back-outline" />
				</IconButtonComponent>
				{/* 추후 navigate 경로 변경 */}
				<IconButtonComponent onPress={() => navigation.navigate('Welcome')}>
					<Text>게임 진행하기</Text>
					<Icon name="play-outline" />
				</IconButtonComponent>
			</ButtonsContainer>
		</GameEntryContainer>
	);
};

export default GameEntry;

const GameEntryContainer = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: #0f3d3e;
	padding: 24px 0px;
	gap: 24px;
`;

const GameTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: white;
`;

const GameContentsWrapper = styled.View`
	flex: 1;
	align-items: center;
	gap: 16px;
	width: 100%;
`;

const GameImageWrapper = styled.View`
	width: 100%;
	height: 50%;
`;

const GameChipsWrapper = styled.View`
	width: 100%;
	align-items: center;
	padding: 0 16px;
`;

const GameDesc = styled.Text`
	font-size: 16px;
	color: white;
	padding: 0 16px;
`;

const ButtonsContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	padding: 0 16px;
	gap: 16px;
`;
