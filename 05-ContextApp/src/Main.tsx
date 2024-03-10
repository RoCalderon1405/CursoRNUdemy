// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {BottomTapNavigator} from './presetation/navigation/BottomTapNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTapNavigator />
    </NavigationContainer>
  );
};
