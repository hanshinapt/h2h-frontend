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
			<ButtonsContainer>
				<ButtonComponent
					text="처음부터 다시 시작하기"
					color="#51987F"
					bgColor="#ffffff"
					onPress={() => navigation.navigate('GameQuestion')}
				/>
				<ButtonComponent
					text="이 게임 떠나기"
					color="#ffffff"
					bgColor="#51987F"
					onPress={() => navigation.navigate('Main')}
				/>
			</ButtonsContainer>
		</GameEndContainer>
	);
};

export default GameEnd;

const GameEndContainer = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const ButtonsContainer = styled.View`
	width: 60%;
	height: 120px;
	gap: 20px;
`;
