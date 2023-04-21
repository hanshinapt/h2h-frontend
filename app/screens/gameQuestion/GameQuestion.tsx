import { useReducer } from 'react';
import styled from 'styled-components/native';
import { useRecoilValue } from 'recoil';
import GestureRecognizer from 'react-native-swipe-gestures';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

import { getGameQuestions } from '@/api/GameQuestionAPI';
import { deckIdState } from '@/store/GameStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface GameQuestionProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const GameQuestion = ({ navigation }: GameQuestionProps) => {
	const deckId = useRecoilValue(deckIdState);
	const { questions } = getGameQuestions(deckId);

	const idxReducer = (idx: number, type: 'PREV' | 'NEXT') => {
		switch (type) {
			case 'PREV':
				if (idx > 0) return idx - 1;
				if (idx === 0) navigation.goBack(); // 게임 퇴장에 대한 alert
			case 'NEXT':
				if (idx < questions.length - 1) return idx + 1;
				if (idx === questions.length - 1) navigation.navigate('Welcome'); // 게임 end에 대한 alert
			default:
				return 0;
		}
	};
	const [questionIdx, dispatch] = useReducer(idxReducer, 0);

	const question = questions.find((item, idx) => idx === questionIdx)?.content;

	return (
		<GameQuestionContainer>
			<GestureRecognizer
				onSwipeLeft={() => dispatch('NEXT')}
				onSwipeRight={() => dispatch('PREV')}>
				<QuestionSection>
					<QuestionIdx>{questionIdx + 1} 번째 질문</QuestionIdx>
					<Question>{question}</Question>
				</QuestionSection>

				<ButtonsContainer>
					<IconWrapper onPress={() => dispatch('PREV')}>
						<Icon name="navigate-before" size={30} color="#51987F" />
					</IconWrapper>
					<IconWrapper onPress={() => dispatch('NEXT')}>
						<Icon name="navigate-next" size={30} color="#51987F" />
					</IconWrapper>
				</ButtonsContainer>
			</GestureRecognizer>
		</GameQuestionContainer>
	);
};

export default GameQuestion;

const GameQuestionContainer = styled.View`
	flex: 1;
	align-items: center;
	background-color: #e6edea;
`;

const QuestionSection = styled.View`
	height: 80%;
	justify-content: center;
	align-items: center;
	padding: 0 10%;
	gap: 24px;
`;

const QuestionIdx = styled.Text`
	font-size: 20px;
`;

const Question = styled.Text`
	font-size: 16px;
	color: #51987f;
`;

const ButtonsContainer = styled.View`
	height: 20%;
	flex-direction: row;
	justify-content: center;
	gap: 60px;
`;

const IconWrapper = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: white;
`;
