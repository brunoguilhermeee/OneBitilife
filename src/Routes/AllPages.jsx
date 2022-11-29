import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import start from "../pages./start";

const Stack = createNativeStackNavigator();

export default function AllPages() {
    return (
        <NavigationContainer>
            <StackActions.Navigator
              screenOptions={{
                headerShow: false,
            }}></StackActions.Navigator>
            
            <Stack.Screen name="start" component={start} />

        </NavigationContainer>
        
    )
}