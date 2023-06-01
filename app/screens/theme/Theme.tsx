import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { getThemeList, ThemeListType } from '@/api/ThemeAPI';
import GameButtonComponent from '@/components/theme/ThemeGameButton';
import Icon from 'react-native-vector-icons/Entypo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
    route: {
        params: {
            id : string,
            name: string,
            icon: string,
        }
    }
}

const Theme = ({navigation, route}: ThemeProps) => {
    const {id, name, icon} = route.params;
    // 테마 id 를 통해서 함수API 데이터 받아오기 (다음에 할 것) / getThemeInfo() 함수
    const themeData : ThemeListType[] = getThemeList();
    return (
        <ThemeContainer>
            <ScrollView>
                <ThemeTitleContainer>
                    <ThemeTitle>{`# ${name}  `}</ThemeTitle>
                    <Icon name={icon} size={25} />
                </ThemeTitleContainer>

                {themeData.map(({id, title, tags}) => (
                    <GameButtonComponent key={id} navigation={navigation} id={id} title={title} tags={tags}/>
                ))}
            </ScrollView>
        </ThemeContainer>
    );
}

export default Theme;

const ThemeContainer = styled.View`
    background-color: white;
    margin: 5px; 10px;
`;
const ThemeTitleContainer = styled.Text`
    display: flex;
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin: 5px 5px;
`;
const ThemeTitle = styled.Text`
`;
