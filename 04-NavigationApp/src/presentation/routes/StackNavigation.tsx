import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductScreen, ProductsScreen} from '../screens/products';
import {SettingsScreens} from '../screens/settings/SettingsScreens';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

export const StackNavigation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreens} />
    </Stack.Navigator>
  );
};
