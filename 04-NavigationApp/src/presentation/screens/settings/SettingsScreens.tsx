import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreens = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Regresar Home"
        onPress={() => navigation.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
