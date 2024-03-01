import React from 'react';
import {SafeAreaView} from 'react-native';
import {CounterScreen} from './src/presentation/screens';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name='Roberto Calderón'/> */}
      <CounterScreen />
    </SafeAreaView>
  );
};
