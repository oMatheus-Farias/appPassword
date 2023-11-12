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
            />

            <Tab.Screen
                name="Passwords"
                component={ Passwords }
            />
        </Tab.Navigator>
    );
};