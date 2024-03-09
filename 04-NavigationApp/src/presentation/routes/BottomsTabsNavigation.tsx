import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen, Tab3Screen} from '../screens/tabs';
import {globalColors} from '../theme/theme';
import {TopTabsNavigator} from './TopTabsNavigators';
import {StackNavigation} from './StackNavigation';
import {IonIcon} from '../components/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonIcon name="person-outline" size={30} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabsNavigator"
        options={{
          title: 'Top',
          tabBarIcon: ({color}) => (
            <IonIcon name="person-outline" size={30} color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="StackNavigation"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcon name="person-outline" size={30} color={color} />
          ),
        }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
};
