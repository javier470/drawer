/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNav } from './src/drawer/drawer';

const App = () => {


  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
