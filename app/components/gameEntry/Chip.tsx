import styled from 'styled-components/native';

interface ChipProps {
	children: React.ReactNode;
	bgColor?: string;
	borderColor?: string;
}

const ChipComponent = ({ children, bgColor, borderColor }: ChipProps) => {
	return (
		<ChipWrapper bgColor={bgColor} borderColor={borderColor}>
			{children}
		</ChipWrapper>
	);
};

export default ChipComponent;

const ChipWrapper = styled.View<{ bgColor?: string; borderColor?: string }>`
	display: flex;
	justify-content: center;
	background-color: white;
	border-radius: 14px;
	padding: 8px;
	font-size: 16px;
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
	border: ${(props) => props.borderColor && `1px solid ${props.borderColor}`};
`;
