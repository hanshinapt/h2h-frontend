import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoilRoot } from 'recoil';
import Welcome from '@/screens/welcome/Welcome';
import Main from '@/screens/main/Main';
import GameEntry from '@/screens/gameEntry/gameEntry';
import Theme from '@/screens/theme/Theme';
import GameQuestion from '@/screens/gameQuestion/GameQuestion';
import GameEnd from '@/screens/gameQuestion/GameEnd';

export type StackParamList = {
	Welcome: undefined;
	Main: undefined;
	Theme : {id: string, name: string};
	GameEntry: undefined;
	GameQuestion: undefined;
	GameEnd: undefined;
};

const App = () => {
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		<RecoilRoot>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome">
					<Stack.Screen
						name="Welcome"
						component={Welcome}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="Main" component={Main} />
					<Stack.Screen name="Theme" component={Theme} />
					<Stack.Screen name="GameEntry" component={GameEntry} />
					<Stack.Screen name="GameQuestion" component={GameQuestion} />
					<Stack.Screen name="GameEnd" component={GameEnd} />
				</Stack.Navigator>
			</NavigationContainer>
		</RecoilRoot>
	);
};

export default App;
