import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigation} from './presentation/routes/StackNavigation';
import {SideMenuNavigation} from './presentation/routes/SideMenuNavigation';
import {BottomTabNavigator} from './presentation/routes/BottomsTabsNavigation';
import {TopTabsNavigator} from './presentation/routes/TopTabsNavigators';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <SideMenuNavigation />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
