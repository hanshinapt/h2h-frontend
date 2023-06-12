import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import ImageComponent from '@/components/common/Image';
import ChipComponent from '@/components/gameEntry/Chip';
import Icon from 'react-native-vector-icons/Ionicons';
import { getGameInfo } from '@/api/GameAPI';
import { useEffect, useState } from 'react';
import { ImageURISource } from 'react-native';
import ArrowBackButton from '@/components/common/ArrowBackButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { deckIdState, questionsState } from '@/store/GameStore';

interface GameEntryProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

interface GameContentsProps {
	gameInfo: GameInfoProps;
}

interface GameInfoProps {
	id: string;
	title: string;
	description: string;
	tagIds: [string];
	imageUrl: string;
	questions: QuestionType[];
	createdAt: string;
	createdBy: string;
	playedCount: string;
}

interface QuestionType {
	content: string;
}

// api GET 할때, tagIds (주어진 tag api랑 다름)
const GameEntry = ({ navigation }: GameEntryProps) => {
	const [gameInfo, setGameInfo] = useState<GameInfoProps | null>(null);
	const deckId = useRecoilValue(deckIdState);
	const setQuestions = useSetRecoilState(questionsState);

	const goToGameQuestionPage = () => {
		navigation.navigate('GameQuestion');
	};

	const handlePressPlayGame = () => {
		goToGameQuestionPage();
	};

	const fetchGameInfo = async () => {
		const res = await getGameInfo(deckId);
		setGameInfo(res);
		setQuestions(res.questions);
	};

	useEffect(() => {
		fetchGameInfo();
	}, []);

	return (
		<GameEntryContainer>
			<ArrowBackButton onPressBackButton={() => navigation.goBack()} />
			<GameContentsContaner>
				{gameInfo && <GameContents gameInfo={gameInfo} />}
			</GameContentsContaner>

			<PlayButton onPress={handlePressPlayGame}>
				<PlayButtonText>게임 진행하기</PlayButtonText>
			</PlayButton>
		</GameEntryContainer>
	);
};

const GameContents = ({ gameInfo }: GameContentsProps) => {
	return (
		<GameContentsWrapper>
			<ImageComponent
				width={30}
				height={30}
				imageUrl={require('@assets/logo.png')}
			/>
			<GameImageWrapper>
				<ImageComponent imageUrl={{ uri: gameInfo.imageUrl }} />
			</GameImageWrapper>
			<GameTitle>{gameInfo.title}</GameTitle>

			{/* <GameChipsWrapper>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ gap: 16 }}>
					{tags.map(({ id, name }) => (
						<ChipComponent key={id} borderColor="#06AE53">
							<ChipContents>
								<ImageComponent
									width={13}
									height={13}
									imageUrl={require('@assets/hashTag.jpg')}
								/>
								<ChipText>{name}</ChipText>
							</ChipContents>
						</ChipComponent>
					))}
				</ScrollView>
			</GameChipsWrapper> */}
			<GameDesc>{gameInfo.description}</GameDesc>
		</GameContentsWrapper>
	);
};

export default GameEntry;

const GameEntryContainer = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 24px 0px;
	gap: 24px;
`;

const GameContentsContaner = styled.View`
	flex: 1;
`;

const GameTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #06ae53;
`;

const GameContentsWrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 100%;
	height: 100%;
`;

const GameImageWrapper = styled.View`
	width: 200px;
	height: 200px;
	border-radius: 100px;
	overflow: hidden;
	margin: 16px 0;
`;

const GameChipsWrapper = styled.View`
	width: 100%;
	align-items: center;
`;

const ChipContents = styled.View`
	flex-direction: row;
	gap: 4px;
`;

const ChipText = styled.Text`
	font-size: 13px;
	color: #06ae53;
`;

const GameDesc = styled.Text`
	font-size: 15px;
	color: #a1a1a1;
	padding: 0 16px;
`;

const PlayButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 85%;
	height: 45px;
	background-color: #06ae53;
	border-radius: 40px;
`;

const PlayButtonText = styled.Text`
	font-size: 20px;
	font-weight: 700;
	color: white;
`;
