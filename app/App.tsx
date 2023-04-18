import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/welcome/Welcome';
import Main from '@screens/main/Main';
import GameEntry from '@screens/gameEntry/gameEntry';
import GameQuestion from '@screens/gameQuestion/GameQuestion';
import { RecoilRoot } from 'recoil';

export type StackParamList = {
	Welcome: undefined;
	Main: undefined;
	GameEntry: undefined;
	GameQuestion: undefined;
};

const App = () => {
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		<RecoilRoot>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome">
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Main" component={Main} />
					<Stack.Screen name="GameEntry" component={GameEntry} />
					<Stack.Screen name="GameQuestion" component={GameQuestion} />
				</Stack.Navigator>
			</NavigationContainer>
		</RecoilRoot>
	);
};

export default App;
