import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { getThemeInfo } from '@/api/ThemeAPI';
import GameButtonComponent from '@/components/theme/ThemeGameButton';
import Icon from 'react-native-vector-icons/Entypo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface ThemeProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Theme = ({navigation}: ThemeProps) => {
    const { themeId, themeName, themeGames, themeIconName } = getThemeInfo();
    return (
        <ThemeContainer>
            <ScrollView>
                <ThemeTitleContainer>
                    <ThemeTitle>{`# ${themeName}  `}</ThemeTitle>
                    <Icon name={themeIconName} size={25} />
                </ThemeTitleContainer>

                {themeGames.map(({GameId, GameName, GameBgColor, tags}) => (
                    <GameButtonComponent key={GameId} name={GameName} tags={tags} bgColor={GameBgColor}/>
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
