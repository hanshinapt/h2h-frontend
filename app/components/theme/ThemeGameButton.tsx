import styled from 'styled-components/native';
import ImageComponent from '@/components/common/Image';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import { useSetRecoilState } from 'recoil';
import { deckIdState } from '@/store/GameStore';
import { ImageURISource } from 'react-native';

interface GameButtonProps {
	navigation: NativeStackNavigationProp<StackParamList>;
	id: string;
	title: string;
	description?: string;
	imageUrl: string;
}

const GameButton = ({
	navigation,
	id,
	title,
	description,
	imageUrl,
}: GameButtonProps) => {
	const setDeckId = useSetRecoilState(deckIdState);

	const handlePressGame = () => {
		navigation.navigate('GameEntry');
		setDeckId(id);
	};

	return (
		<GameButtonContainer onPress={handlePressGame}>
			<ImageWrapper>
				<ImageComponent width={70} height={70} imageUrl={{ uri: imageUrl }} />
			</ImageWrapper>
			<GameContentsContainer>
				<GameName>{title}</GameName>
				<GameDescription>{description}</GameDescription>
			</GameContentsContainer>
		</GameButtonContainer>
	);
};

export default GameButton;

const GameButtonContainer = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 90px;
	padding: 10px;
	gap: 10px;
	border: 1px solid #e8e8e8;
	border-radius: 8px;
`;

const ImageWrapper = styled.View`
	width: 70px;
	height: 70px;
	border-radius: 6px;
	overflow: hidden;
`;

const GameContentsContainer = styled.View`
	height: 100%;
	justify-content: flex-start;
	word-break: break-all;
	gap: 4px;
`;

const GameName = styled.Text`
	color: #06ae53;
	font-size: 16px;
	font-weight: bold;
`;

const GameDescription = styled.Text`
	font-size: 14px;
	color: #444444;
`;
