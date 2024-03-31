import 'react-native-gesture-handler';

import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationStack} from './presentation/navigation/NavigationStack';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

export const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
