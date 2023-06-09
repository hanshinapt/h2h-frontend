import styled from 'styled-components/native';
import { Image, ImageURISource } from 'react-native';

interface ImageComponentProps {
	imageUrl: ImageURISource;
	width?: number;
	height?: number;
}

const ImageComponent = ({ imageUrl, width, height }: ImageComponentProps) => {
	return (
		<ImageWrapper>
			<Image
				source={imageUrl}
				style={{ width: width ?? '100%', height: height ?? '100%' }}
				resizeMode="cover"
			/>
		</ImageWrapper>
	);
};

export default ImageComponent;

const ImageWrapper = styled.View<{
	width?: number | string;
	height?: number | string;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
`;
