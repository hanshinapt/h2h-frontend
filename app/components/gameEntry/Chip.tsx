import styled from 'styled-components/native';

interface ChipProps {
	text: string;
	color?: string;
	bgColor?: string;
}

const ChipComponent = ({ text, color, bgColor }: ChipProps) => {
	return (
		<ChipWrapper bgColor={bgColor}>
			<ChipText color={color}>{text}</ChipText>
		</ChipWrapper>
	);
};

export default ChipComponent;

const ChipWrapper = styled.View<{ bgColor?: string }>`
	display: flex;
	justify-content: center;
	background-color: white;
	border-radius: 12px;
	padding: 8px;
	font-size: 16px;
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
`;

const ChipText = styled.Text<{ color?: string }>`
	text-align: center;
	color: ${(props) => props.color && props.color};
`;
