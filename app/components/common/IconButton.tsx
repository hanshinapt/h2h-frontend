import { Text } from 'react-native';
import styled from 'styled-components/native';

interface IconButtonComponentProps {
	children: any;
	color?: string;
	bgColor?: string;
	onPress?: () => void;
}

const IconButtonComponent = ({
	children,
	color,
	bgColor,
	onPress,
}: IconButtonComponentProps) => {
	return (
		<ButtonWrapper color={color} bgColor={bgColor} onPress={onPress}>
			{children}
		</ButtonWrapper>
	);
};

export default IconButtonComponent;

const ButtonWrapper = styled.TouchableOpacity<{
	color?: string;
	bgColor?: string;
}>`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px;
	gap: 8px;
	border-radius: 8px;
	color: ${(props) => props.color && props.color};
	background-color: ${(props) => props.bgColor ?? 'white'};
`;
