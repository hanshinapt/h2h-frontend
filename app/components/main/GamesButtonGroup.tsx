import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { GamesInfoType, TagsType } from '@/api/MainBestGamesAPI';
import { Image, ImageSourcePropType } from 'react-native';
import TitleComponent from './Title';
import ImageComponent from '../common/Image';

interface GamseButtonGroupProps {
	title: string;
	games: GamesInfoType[];
}

interface GameButtonProps {
	name: string;
	description: string;
}

interface ImageComponentProps {
	imageUrl: ImageSourcePropType;
	width?: number;
	height?: number;
}

const GamesCardGroup = ({ title, games }: GamseButtonGroupProps) => {
	return (
		<GamesCardGroupContainer>
			<TitleComponent title={title} />
			<Description>
				HeartToHeart에서 가장 인기 있는 게임을 만나보세요.
			</Description>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<CardsWrapper>
					{games.map(({ id, title, description }) => (
						<CardComponent key={id} name={title} description={description} />
					))}
				</CardsWrapper>
			</ScrollView>
		</GamesCardGroupContainer>
	);
};

const CardComponent = ({ name, description }: GameButtonProps) => {
	return (
		<CardContainer>
			<ImageWrapper>
				<ImageComponent
					imageUrl={require(`@assets/traveling/traveling1.jpg`)}
				/>
			</ImageWrapper>

			<CardTitle numberOfLines={2} ellipsizeMode="tail">
				{name}
			</CardTitle>

			<CardDesc numberOfLines={3} ellipsizeMode="tail">
				{description}
			</CardDesc>
		</CardContainer>
	);
};

export default GamesCardGroup;

const GamesCardGroupContainer = styled.View`
	width: 100%;
	margin: 40px 0 0 0;
`;

const Description = styled.Text`
	font-weight: 300;
`;

const CardContainer = styled.View`
	gap: 8px;
	width: 130px;
	height: 160px;
	border-radius: 8px;
	padding: 10px;
	background-color: #f3f3f3;
`;

const CardsWrapper = styled.View`
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

const ImageWrapper = styled.View`
	width: 40px;
	height: 40px;
`;

const CardTitle = styled.Text`
	color: black;
	font-size: 16px;
	font-weight: 600;
`;

const CardDesc = styled.Text`
	font-size: 14px;
	font-weight: 300;
`;
