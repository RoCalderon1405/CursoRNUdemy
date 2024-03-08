import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigation} from './presentation/routes/StackNavigation';
import {SideMenuNavigation} from './presentation/screens/home/SideMenuNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <SideMenuNavigation />
    </NavigationContainer>
  );
};
