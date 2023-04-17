import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/welcome/Welcome';
import Main from '@screens/main/Main';
import GameEntry from '@screens/gameEntry/gameEntry';

export type StackParamList = {
	Welcome: undefined;
	Main: undefined;
	GameEntry: undefined;
};

const App = () => {
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome">
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Main" component={Main} />
					<Stack.Screen name="GameEntry" component={GameEntry} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
