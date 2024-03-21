import 'react-native-gesture-handler';
import {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function PokedexApp({children}: PropsWithChildren) {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
