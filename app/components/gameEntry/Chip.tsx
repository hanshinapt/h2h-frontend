import styled from 'styled-components/native';

interface ChipProps {
	text: string;
}

const Chip = ({ text }: ChipProps) => {
	return (
		<ChipWrapper>
			<ChipText>{text}</ChipText>
		</ChipWrapper>
	);
};

export default Chip;

const ChipWrapper = styled.View`
	background-color: white;
	border-radius: 12px;
	padding: 8px;
	font-size: 16px;
`;

const ChipText = styled.Text`
	color: #0f3d3e;
`;
