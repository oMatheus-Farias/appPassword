import React from 'react';
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AsyncStorageProvider from './src/context/asynStorage';

export default function App() {
  return (
    <AsyncStorageProvider>
      <SafeAreaView style={{ flex: 1}} >
        <NavigationContainer>
          <StatusBar backgroundColor='#F3F3FF' barStyle='dark-content' />
          <Routes/>
        </NavigationContainer>
      </SafeAreaView>
    </AsyncStorageProvider>
  );
};