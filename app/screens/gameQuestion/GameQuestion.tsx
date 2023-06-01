import { useReducer } from 'react';
import styled from 'styled-components/native';
import { useRecoilValue } from 'recoil';
import GestureRecognizer from 'react-native-swipe-gestures';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

import { getGameQuestions } from '@/api/GameQuestionAPI';
import { deckIdState } from '@/store/GameStore';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageComponent from '@/components/common/Image';

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
				if (idx === questions.length - 1) navigation.navigate('GameEnd');
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
				<HeaderSection>
					<ImageComponent
						width={30}
						height={30}
						imageUrl={require('@assets/logo.png')}
					/>
					<QuestionIdx>{questionIdx + 1}번째 질문</QuestionIdx>
				</HeaderSection>
				<QuestionSection>
					<Question>{question}</Question>
				</QuestionSection>

				<ButtonsContainer>
					<IconWrapper onPress={() => dispatch('PREV')}>
						<Icon name="navigate-before" size={30} />
					</IconWrapper>
					<IconWrapper onPress={() => dispatch('NEXT')}>
						<Icon name="navigate-next" size={30} />
					</IconWrapper>
				</ButtonsContainer>
			</GestureRecognizer>
		</GameQuestionContainer>
	);
};

export default GameQuestion;

const GameQuestionContainer = styled.View`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	padding: 24px 20px;
`;

const HeaderSection = styled.View`
	height: 20%;
	align-items: center;
	gap: 12px;
`;
1;

const QuestionSection = styled.View`
	height: 70%;
	justify-content: center;
	align-items: center;
	gap: 24px;
`;

const QuestionIdx = styled.Text`
	font-size: 18px;
`;

const Question = styled.Text`
	text-align: center;
	font-size: 18px;
	line-height: 24px;
`;

const ButtonsContainer = styled.View`
	height: 10%;
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
	background-color: #f0f9f4;
`;
