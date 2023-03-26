import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/welcome/Welcome';
import Main from '@screens/main/Main';

export type StackParamList = {
	Welcome: undefined;
	Main: undefined;
};

const App = () => {
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Main" component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
