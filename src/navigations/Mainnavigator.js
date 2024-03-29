import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import TabNavigator from "./TabNavigator";
import StatusBar from 'react';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
    <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator>
            <Stack.Screen 
            name="Root" 
            component={TabNavigator} 
            options={{
            headerShown: false,
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MainNavigator;
