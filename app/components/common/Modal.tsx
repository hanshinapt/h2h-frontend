import styled from 'styled-components/native';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface ArrowBackButtonModalProps {
	modalVisible: boolean;
	onClosePress: () => void;
	navigation: NativeStackNavigationProp<StackParamList>;
}

const ArrowBackButtonModal = ({
	modalVisible,
	onClosePress,
	navigation,
}: ArrowBackButtonModalProps) => {
	const closeModal = () => {
		onClosePress();
	};
	const backNavigationModal = () => {
		onClosePress();
		navigation.goBack();
	};
	return (
		<Modal visible={modalVisible} transparent={true} animationType={'fade'}>
			<ModalContainer>
				<TouchableWithoutFeedback onPress={closeModal}>
					<TouchableWithoutFeedbackWrapper>
						<ModalWrapper>
							<ModalMessageWrapper>
								<ModalMessage>아직 게임이 진행중이에요.</ModalMessage>
								<ModalMessage>정말 게임을 떠나실 건가요?</ModalMessage>
							</ModalMessageWrapper>
							<ModalButtonsWrapper>
								<ExitButton onPress={backNavigationModal}>
									<ExitButtonText>게임 떠나기</ExitButtonText>
								</ExitButton>
								<PlayButton onPress={closeModal}>
									<PlayButtonText>계속 진행하기</PlayButtonText>
								</PlayButton>
							</ModalButtonsWrapper>
						</ModalWrapper>
					</TouchableWithoutFeedbackWrapper>
				</TouchableWithoutFeedback>
			</ModalContainer>
		</Modal>
	);
};

export default ArrowBackButtonModal;

const ModalContainer = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
const TouchableWithoutFeedbackWrapper = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(128, 128, 128, 0.2);
`;

const ModalWrapper = styled.View`
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 200px;
	background-color: white;
	border-radius: 8px;
	border: 1px solid black;
`;

const ModalMessageWrapper = styled.View`
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

const ModalMessage = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: black;
`;

const ModalButtonsWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 15px;
`;

const ExitButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	border: 1px solid #06ae53;
	background-color: #f1f1f1;
	padding: 5px;
	width: 120px;
	height: 40px;
	margin-right: 8px;
`;

const ExitButtonText = styled.Text`
	font-size: 14px;
	color: #06ae53;
`;

const PlayButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	border: 1px solid #06ae53;
	background-color: #06ae53;
	padding: 5px;
	width: 120px;
	height: 40px;
	margin-left: 8px;
`;

const PlayButtonText = styled.Text`
	font-size: 14px;
	color: white;
`;
