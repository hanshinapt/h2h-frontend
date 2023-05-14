import styled from 'styled-components/native';
import { Image, ImageSourcePropType, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface GameButtonProps {
    name: string;
    bgColor: string;
    tags: TagsType[];
}

interface TagsType {
	tagId: string;
	tagName: string;
}

interface ImageComponentProps {
	imageUrl: ImageSourcePropType;
	width?: number;
	height?: number;
}

const GameButtonComponent = ({name, tags, bgColor}: GameButtonProps) => {
    return (
        <ButtonWrapper bgColor={bgColor}>
            
            <ImageComponent imageUrl={require(`@assets/traveling/traveling1.jpg`)}/>
            
            <ButtonNameTagWrapper>
                <ButtonNameWrapper>
                    <ButtonName>{name}</ButtonName>
                </ButtonNameWrapper>
                <ButtonTagWrapper>
                    {tags.map(({tagId, tagName}) => (
                        <ButtonTag key={tagId}>{`#${tagName}`}</ButtonTag>
                    ))}
                </ButtonTagWrapper>
            </ButtonNameTagWrapper>
            
            <Icon name="navigate-next" size={30}/>
        
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
export default GameButtonComponent;

const ButtonWrapper = styled.View<{
    bgColor: string;
}>`
	flex-direction: row;
	justify-content: center;
    align-items: center;
    height: 80px;
 	background-color: ${props => props.bgColor};
	border-radius: 10px;
    padding: 5px 5px;
    margin: 5px 0px;
`;
const ImageWrapper = styled.View`
    width: 20%;
`;
const ButtonNameTagWrapper = styled.View`
    width: 70%;
    padding: 0px 10px;
`;
const ButtonNameWrapper = styled.View`
`;
const ButtonName = styled.Text`
    color: white;
    font-weight: bold;
`;
const ButtonTagWrapper = styled.View`
	flex-direction: row;
`;
const ButtonTag = styled.Text`
    color: white;
    font-size: 10px;
	font-weight: bold;
    padding-right: 10px; 
`;