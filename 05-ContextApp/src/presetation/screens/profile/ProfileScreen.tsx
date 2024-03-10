import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/app-theme';
import {useProfileStore} from '../../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}> Nombre: {name}</Text>
      <Text style={globalStyles.title}> Email: {email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Roberto '})}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'roberto@correo.com'})}>
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('Jhon', 'jon@correo.com')}>
        <Text>Cambiar a Jon</Text>
      </Pressable>
    </View>
  );
};
