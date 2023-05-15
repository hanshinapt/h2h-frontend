import { Text } from 'react-native';
import styled from 'styled-components/native';

interface ButtonComponentProps {
	text: string;
	color?: string;
	bgColor?: string;
	onPress?: () => void;
}

const ButtonComponent = ({
	text,
	color,
	bgColor,
	onPress,
}: ButtonComponentProps) => {
	console.log(color, bgColor);
	return (
		<ButtonWrapper bgColor={bgColor} onPress={onPress}>
			<ButtonText color={color}>{text}</ButtonText>
		</ButtonWrapper>
	);
};

export default ButtonComponent;

const ButtonWrapper = styled.TouchableOpacity<{
	bgColor?: string;
}>`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px;
	gap: 16px;
	border-radius: 8px;
	background-color: ${(props) => props.bgColor ?? 'white'};
`;

const ButtonText = styled.Text<{ color?: string }>`
	font-size: 16px;
	text-align: center;
	color: ${(props) => props.color && props.color};
`;
