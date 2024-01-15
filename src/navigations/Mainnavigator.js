import React from "react";
import {createStackNavigator } from "react";
import{NavigatorContainer} from "react";
import HomeScreen from "react";
import TabNavigator from "react";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return <NavigatorContainer>
        <Stack.Navigator>
            <Stack.Screen name="Root" component={HomeScreen}/>
        </Stack.Navigator>
    </NavigatorContainer>
}


export default MainNavigator;
