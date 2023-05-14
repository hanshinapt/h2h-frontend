import styled from 'styled-components/native';

interface TitleProps {
    title: string;
}

const TitleComponent = ({title}: TitleProps) => {
    return (
        <TitleWrapper>
            <Title>{title}</Title>
        </TitleWrapper>
    );
}

export default TitleComponent;

const TitleWrapper = styled.View`
  margin-left: 15px;
`;

const Title = styled.Text`
    color: black;
    font-size: 20px;
	font-weight: bold;
`;