import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Image, ImageSourcePropType, Dimensions } from 'react-native';
import TitleComponent from './Title';

interface GamseButtonGroupProps {
    title: string;
    games: GameType[];
}

interface GameType {
    gameId: string;
    gameName: string;
    gameTags: TagsType[];
}

interface TagsType {
    tagId: string;
    tagName: string;
}

interface GameButtonProps {
    name: string;
    tags: TagsType[];
}

interface ImageComponentProps {
	imageUrl: ImageSourcePropType;
	width?: number;
	height?: number;
}

const GamesButtonGroupComponent = ({title, games}: GamseButtonGroupProps) => {
    return (
        <GamesButtonGroupContainer>
            <TitleComponent title={title}/>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {games.map(({gameId, gameName, gameTags})=> (
                    <GameButtonComponent key={gameId} name={gameName} tags={gameTags} />
                ))}
            </ScrollView>
        </GamesButtonGroupContainer>
    );
};

const GameButtonComponent = ({name, tags}: GameButtonProps) => {
    return (
        <ButtonWrapper>
            
            <ButtonNameWrapper>
                <ButtonName numberOfLines={2} ellipsizeMode="tail">{name}</ButtonName>
            </ButtonNameWrapper>

            <ButtonTagsWrapper>
                {tags.map(({tagId, tagName}) => (
                    <ButtonTag key={tagId}>{`#${tagName}`}</ButtonTag>
                ))}
            </ButtonTagsWrapper>
            
            <ImageComponent imageUrl={require(`@assets/traveling/traveling1.jpg`)}/>

        </ButtonWrapper>
    );
};

const ImageComponent = ({ imageUrl, width, height }: ImageComponentProps) => {
	return (
		<ImageWrapper>
			<Image
				source={imageUrl}
				style={{ width: width ?? '100%', height: height ?? '100%' }}
				resizeMode="contain"
                borderRadius={10}
			/>
		</ImageWrapper>
	);
};
export default GamesButtonGroupComponent;

const GamesButtonGroupContainer = styled.View`
    background-color: #F1F6F9;
    margin: 5px 3px;
    padding: 5px 3px;
    border-radius: 10px;
`;
const ButtonWrapper = styled.View`
    width: 150px;
    height: 200px;
 	background-color: #F99B7D;
	border-radius: 10px;
    padding: 15px 10px;
    margin: 5px 10px 0px 10px;
`;
const ButtonNameWrapper = styled.View`
    height: 30%;
    justify-content: center;
	align-items: center;
`;
const ButtonName = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;
const ButtonTagsWrapper = styled.View`
    display: flex;
	flex-direction: row;
    justify-content: space-evenly;
	align-items: center;
    height: 15%;
`;
const ButtonTag = styled.Text`
    color: white;
    font-size: 10px;
	font-weight: bold;
`;
const ImageWrapper = styled.View`
    height: 55%;
`;