import styled from 'styled-components/native';
import TitleComponent from '@/components/main/Title';
import Icon from 'react-native-vector-icons/Entypo';


interface ThemeButtonGroupProps {
    title: string;
    theme: ThemeType[];
}
interface ThemeType {
    themeId: string;
    themeName: string;
    themeIcon: string;
}
interface ThemeButtonProps {
	name: string;
    iconName: string;
}

const ThemeButtonGroupComponent = ({title, theme}: ThemeButtonGroupProps) => {
    return (
        <ThemeButtonGroupContainer>
            <TitleComponent title={title}/>
            
            <ThemeButtonContainer>
                {theme.map(({themeId, themeName, themeIcon}) => {
                    return (
                        <ThemeButtonComponent key={themeId} name={themeName} iconName={themeIcon}/>
                    );
                })}
            </ThemeButtonContainer>
        </ThemeButtonGroupContainer>

    );
};

const ThemeButtonComponent = ({name, iconName}: ThemeButtonProps) => {
    return (
        <ButtonWrapper>
            <Icon name={iconName} size={25} color="white"/>
            <ButtonText>{name}</ButtonText>
        </ButtonWrapper>
    );
};

export default ThemeButtonGroupComponent;

const ThemeButtonGroupContainer = styled.View`
    background-color: #F1F6F9;
    margin: 5px 3px;
    padding: 5px 0px;
    border-radius: 10px;
`;
const ThemeButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    flexWrap: wrap;
`;
const ButtonWrapper = styled.View`
    display: flex;
	justify-content: center;
	align-items: center;
    background-color: #98D8AA;
    width: 20%;
    height: 75px;
    border-radius: 12px;
    margin: 2.5%;
    padding-top: 3px;
`;

const ButtonText = styled.Text`
    font-size: 10px;
	font-weight: bold;
    color: black;
	text-align: center;
    margin-top: 5px;
`;