import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "react";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
return <TabNavigator>
<Tab.Sreen name="Home" component={HomeScreen} />
</TabNavigator>
}

export default TabNavigator;
