import React from 'react';
import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/HamburguerMenu';
import {IonIcon} from '../../components/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1</Text>
    </View>
  );
};
