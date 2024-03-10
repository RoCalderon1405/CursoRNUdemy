import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {useCountStore} from '../../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTapNavigator = () => {
  const count = useCountStore(state => state.count);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Settings"
        // options={{headerTitleAlign: 'center', headerTitle: `Counter: ${count}`}}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
