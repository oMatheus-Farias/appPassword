import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from 'react-native-vector-icons/Feather';

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
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        return <Icons size={ size } color={ focused ? '#392DE4' : '#BBBB' } name="home" />
                    }
                }}
            />

            <Tab.Screen
                name="Passwords"
                component={ Passwords }
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        return <Icons size={ size } color={ focused ? '#392DE4' : '#BBBB' } name="lock" />
                    }
                }}
            />
        </Tab.Navigator>
    );
};