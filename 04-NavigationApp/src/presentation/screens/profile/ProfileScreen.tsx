import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigate = useNavigation();
  return (
    <View style={{flex: 1, paddingHorizontal: 20, marginTop: top}}>
      <Text style={{marginBottom: 10}}>Profile</Text>

      <PrimaryButton
        label="Abrir menú"
        onPress={() => navigate.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};
