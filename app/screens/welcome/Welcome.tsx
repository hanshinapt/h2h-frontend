import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@/App';

interface WelcomProps {
	navigation: NativeStackNavigationProp<StackParamList>;
}

const Welcome = ({ navigation }: WelcomProps) => {
	return (
		<View>
			<Button title="버튼" onPress={() => navigation.navigate('Main')} />
			<Text>웰컴 페이지</Text>
		</View>
	);
};

export default Welcome;
