import { getGameInfo } from '@/api/GameEntryAPI';
import Button from '@/components/common/Button';
import Chip from '@/components/gameEntry/Chip';
import styled from 'styled-components/native';

const GameEntry = () => {
	const { title, tags, description } = getGameInfo();

	return (
		<GameEntryContainer>
			<GameTitle>{title}</GameTitle>
			<ChipsContainer>
				{tags.map(({ name }) => (
					<Chip text={`# ${name}`} />
				))}
			</ChipsContainer>
			<GameDesc>{description}</GameDesc>
			<ButtonContainer>
				<Button text="뒤로가기" />
				<Button text="게임 진행하기" />
			</ButtonContainer>
		</GameEntryContainer>
	);
};

export default GameEntry;

const GameEntryContainer = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #0f3d3e;
	padding: 16px;
	gap: 16px;
`;

const GameTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: white;
`;

const ChipsContainer = styled.View`
	display: flex;
	flex-direction: row;
	gap: 16px;
`;

const GameDesc = styled.Text`
	font-size: 16px;
	color: white;
`;

const ButtonContainer = styled.View`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`;
