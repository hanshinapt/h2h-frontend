import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface ArrowBackButtonProps {
	onPressBackButton: () => void;
}

const ArrowBackButton = ({ onPressBackButton }: ArrowBackButtonProps) => {
	return (
		<IconWrapper onPress={onPressBackButton}>
			<Icon name="arrow-back-outline" size={25} color="#a1a1a1" />
		</IconWrapper>
	);
};

export default ArrowBackButton;

const IconWrapper = styled.TouchableOpacity`
	z-index: 100;
	position: absolute;
	top: 55px;
	left: 20px;
	width: 30px;
	height: 30px;
`;
