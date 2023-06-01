import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import ImageComponent from '@/components/common/Image';

interface WelcomProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Welcome = ({ navigation }: WelcomProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.replace('Main');
		}, 2000);

		return () => clearTimeout(timer);
	}, [navigation])
	return (
		<WelcomeContainer>
				<WelcomeImageContainer>
					<ImageComponent imageUrl={require('@assets/h2h/logo1.jpg')} />
				</WelcomeImageContainer>
				<WelcomeName>
					<WelomeDescription>서로를 알아가는 마음의 대화</WelomeDescription>
					<WelcomeTitle>Heart To Heart</WelcomeTitle>
				</WelcomeName>
		</WelcomeContainer>
	);
};

export default Welcome;

const WelcomeContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: white;
`;
const WelcomeImageContainer = styled.View`
	width: 80px;
	height: 80px;
	margin-bottom: 10px;
`;
const WelcomeName = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const WelomeDescription = styled.Text`
	font-size: 10px;
	font-weight: 400;
	color: black;
`;
const WelcomeTitle = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #06AE53;
`;