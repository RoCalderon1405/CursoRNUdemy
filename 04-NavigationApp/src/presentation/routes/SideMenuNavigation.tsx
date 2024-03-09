import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {ProductsScreen} from '../screens/products';
import {BottomTabNavigator} from './BottomsTabsNavigation';
import {IonIcon} from '../components/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigation = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerInactiveTintColor: globalColors.primary,
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigation} /> */}
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          drawerActiveTintColor: 'white',
          drawerIcon: ({color}) => (
            <IonIcon name="options-outline" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-outline" size={30} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
