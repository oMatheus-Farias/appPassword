import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home/index';
import Passwords from '../pages/Passwords/index';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={ Home }
                options={{
                    tabBarShowLabel: false,
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Passwords"
                component={ Passwords }
                options={{
                    tabBarShowLabel: false,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};