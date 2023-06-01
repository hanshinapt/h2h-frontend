import styled from 'styled-components/native';
import { Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';
import { useSetRecoilState } from 'recoil';
import { deckIdState } from '@/store/GameStore';

interface GameButtonProps {
	navigation: NativeStackNavigationProp<StackParamList>;
    id : string;
    title: string;
    tags: TagsType[];
}

interface TagsType {
	id: string;
	name: string;
}

interface ImageComponentProps {
	imageUrl: ImageSourcePropType;
	width?: number;
	height?: number;
}

const GameButtonComponent = ({navigation, id, title, tags}: GameButtonProps) => {
	const setDeckId = useSetRecoilState(deckIdState);

    const handlePressGame = () => {
        navigation.navigate('GameEntry');
		setDeckId(id);
    }
    return (
        <ButtonWrapper onPress={handlePressGame}>
            
            <ImageComponent imageUrl={require(`@assets/traveling/traveling1.jpg`)}/>
            
            <ButtonNameTagWrapper>
                <ButtonNameWrapper>
                    <ButtonName>{title}</ButtonName>
                </ButtonNameWrapper>
                <ButtonTagWrapper>
                    {tags.map(({id, name}) => (
                        <ButtonTag key={id}>{`#${name}`}</ButtonTag>
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

const ButtonWrapper = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
    align-items: center;
    height: 80px;
 	background-color: #F99B7D;
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