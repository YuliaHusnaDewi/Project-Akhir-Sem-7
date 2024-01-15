import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import {Image} from "react-native";
import Icon from "../components/icon";
import { colors } from "../components/theme";
import {StyleSheet, Animated} from "react-native";

const tabs = [
    {
        name: 'Home',
        screen: HomeScreen,
    },
    {
        name: 'Search',
        screen: SearchScreen,
    },
    {
        name: 'Favorite',
        screen: FavoriteScreen,
    },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const offsetAnimation = React.useRef(new Animated.Value(0)).current;
    return (
        <>
    <Tab.Navigator 
    initialRouteName="Home" 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
    }}>
        {tabs.map(({name, screen}, index ) => {
            return (
            <Tab.Screen 
        key={name}
        name={name} 
        component={screen} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                <Icon 
                icon={name} 
                size={40} 
                style={{
                    tintColor: focused ? colors.primary : colors.gray,
                }}
                />
                );
            },
        }}
        listeners={{
            focus: () => {
                Animated.spring(offsetAnimation,{
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true
                }).start();
                },
            }}
        />
            );
    })}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
    <Animated.View 
    style={[
        styles.indicator, 
        {
        transform: [
            {
            translateX: offsetAnimation,
        },
        ],
    },
]}
    />
    </>
    );
};

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        width: 10,
        height: 2,
        left: size.width /3/2 - 5,
        bottom: 30,
        backgroundColor: colors.primary,
        index: 100,
    },
});

export default TabNavigator;