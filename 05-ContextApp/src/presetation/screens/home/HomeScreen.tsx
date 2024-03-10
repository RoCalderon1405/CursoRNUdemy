import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/app-theme';
import { useProfileStore } from '../../../store/profile-store';
import { useCountStore } from '../../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCountStore(state => state.count);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}> Nombre: {name}</Text>
      <Text style={globalStyles.title}> Email: {email}</Text>
      <Text style={globalStyles.title}> Count: {count}</Text>
    </View>
  );
};
