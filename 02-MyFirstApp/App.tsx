import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  BoxObjectModelScreen,
  CounterM3Screen,
  CounterScreen,
  DimensionScreen,
  FlexScreen,
  PositionScreen,
  HomeworkScreen
} from './src/presentation/screens';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
