import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  );
}