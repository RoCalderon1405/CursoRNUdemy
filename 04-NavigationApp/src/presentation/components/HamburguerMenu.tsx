import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <IonIcon name="reorder-four-outline" size={30} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
