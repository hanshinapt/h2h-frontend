import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { GamesInfoType, TagsType } from '@/api/MainBestGamesAPI';
import { Image, ImageSourcePropType } from 'react-native';
import TitleComponent from './Title';

interface GamseButtonGroupProps {
    title: string;
    games: GamesInfoType[];
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
                {games.map(({id, title, tags})=> (
                    <GameButtonComponent key={id} name={title} tags={tags} />
                ))}
            </ScrollView>
        </GamesButtonGroupContainer>
    );
};

const GameButtonComponent = ({name, tags}: GameButtonProps) => {
    return (
        <ButtonWrapper>
            
            <ImageComponent imageUrl={require(`@assets/traveling/traveling1.jpg`)}/>

            <ButtonNameWrapper> 
                <ButtonName numberOfLines={2} ellipsizeMode="tail">{name}</ButtonName>
            </ButtonNameWrapper>

            <ButtonTagsWrapper>
                {tags.map(({id, name}) => (
                    <ButtonTag key={id}>{`#${name}`}</ButtonTag>
                ))}
            </ButtonTagsWrapper>
            

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
    display: flex;
    justify-content: space-between;
    width: 130px;
    height: 150px;
 	background-color: #F99B7D;
	border-radius: 10px;
    padding: 15px 10px;
    margin: 5px 10px;
`;
const ImageWrapper = styled.View`
    width: 45px;
    height: 45px;
`;
const ButtonNameWrapper = styled.View`
    height: 30%;
    justify-content: center;
	align-items: center;
`;
const ButtonName = styled.Text`
    color: white;
    font-size: 13px;
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