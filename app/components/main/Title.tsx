import styled from 'styled-components/native';

interface TitleProps {
	title: string;
}

const TitleComponent = ({ title }: TitleProps) => {
	return <Title>{title}</Title>;
};

export default TitleComponent;

const Title = styled.Text`
	color: black;
	font-size: 24px;
	font-weight: 500;
`;
