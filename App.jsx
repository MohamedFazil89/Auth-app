import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, CardStyleInterpolators  } from "@react-navigation/native-stack";
import Home from './Home';
import HomePage from './Pages/HomePage';


const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home"  component={Home} options={{ animation: "slide_from_right"}} />
                <Stack.Screen name="HomePage"  component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}