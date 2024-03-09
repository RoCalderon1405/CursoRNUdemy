import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigation';
import {IonIcon} from '../../components/IonIcon';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="filter-outline" size={30} />
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
