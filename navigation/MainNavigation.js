import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from './Routes'
import Home from "../Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();


const MainNavigation = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{header : () => null}}>
            <Stack.Screen name={Routes.Home} component={Home}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation