import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {PermissionChecker} from './presentation/providers/PermissionChecker';

enableLatestRenderer();

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionChecker>
        <StackNavigator />
      </PermissionChecker>
    </NavigationContainer>
  );
};
