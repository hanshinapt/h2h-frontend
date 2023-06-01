import styled from 'styled-components/native';
import ImageComponent from '@/components/common/Image';

interface GameButtonProps {
	name: string;
	description?: string;
}

interface TagsType {
	tagId: string;
	tagName: string;
}

const ThemeButton = ({ name, description }: GameButtonProps) => {
	return (
		<ThemeButtonContainer>
			<ImageWrapper>
				<ImageComponent
					width={70}
					height={70}
					imageUrl={require('@assets/traveling/traveling1.jpg')}
				/>
			</ImageWrapper>
			<GameContentsContainer>
				<GameName>{name}</GameName>
				<GameDescription>{description}</GameDescription>
			</GameContentsContainer>
		</ThemeButtonContainer>
	);
};

export default ThemeButton;

const ThemeButtonContainer = styled.View`
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 90px;
	padding: 10px;
	gap: 10px;
	border: 1px solid #e8e8e8;
	border-radius: 8px;
`;

const ImageWrapper = styled.View`
	width: 70px;
	height: 70px;
	border-radius: 6px;
	overflow: hidden;
`;

const GameContentsContainer = styled.View`
	height: 100%;
	justify-content: flex-start;
	word-break: break-all;
	gap: 4px;
`;

const GameName = styled.Text`
	color: #06ae53;
	font-size: 16px;
	font-weight: bold;
`;

const GameDescription = styled.Text`
	font-size: 14px;
	color: #444444;
`;
