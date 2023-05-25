import { View, Text } from 'react-native';
import { StackParamList } from '@/App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonComponent from '@/components/common/Button';
import styled from 'styled-components/native';

interface GameEndProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const GameEnd = ({ navigation }: GameEndProps) => {
	return (
		<GameEndContainer>
			<GameEndMsg>
				<Text>모든 질문이 끝났습니다!</Text>
				<Text>이 대화를 통해 좀 더 가까워지셨나요?</Text>
				<Text>heartToheart를 통해 서로를 더 많이 알아가보세요.</Text>
			</GameEndMsg>

			<ButtonsContainer>
				<RestartButton onPress={() => navigation.navigate('GameQuestion')}>
					<RestartButtonText>처음부터 다시 시작하기</RestartButtonText>
				</RestartButton>
				<ExitButton onPress={() => navigation.navigate('Main')}>
					<ExitButtonText>다른 게임 하러 가기</ExitButtonText>
				</ExitButton>
			</ButtonsContainer>
		</GameEndContainer>
	);
};

export default GameEnd;

const GameEndContainer = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: white;
	gap: 30px;
`;

const GameEndMsg = styled.View`
	align-items: center;
	gap: 6px;
`;

const ButtonsContainer = styled.View`
	width: 80%;
	height: 120px;
	gap: 20px;
`;

const RestartButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	height: 45px;
	border: 1px solid #06ae53;
	color: #06ae53;
	border-radius: 40px;
`;

const RestartButtonText = styled.Text`
	color: #06ae53;
`;

const ExitButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	height: 45px;
	background-color: #06ae53;
	border-radius: 40px;
`;

const ExitButtonText = styled.Text`
	color: white;
`;
