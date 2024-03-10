import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/app-theme';
import {useProfileStore} from '../../../store/profile-store';
import {useCountStore} from '../../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const changeProfile = useProfileStore(state => state.changeProfile);
  const incrementBy = useCountStore(state => state.incrementBy);
  const count = useCountStore(state => state.count);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Count ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
