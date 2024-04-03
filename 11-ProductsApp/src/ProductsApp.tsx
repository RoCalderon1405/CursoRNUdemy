import 'react-native-gesture-handler';

import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationStack} from './presentation/navigation/NavigationStack';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AuthProvider} from './presentation/providers/AuthProvider';

export const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  const backgoundColor =
    colorScheme === 'dark'
      ? theme['color-basic-800']
      : theme['color-basic-100'];

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgoundColor,
              card: theme['color-basic-100'],
              border: theme['color-basic-800'],
              text: theme['color-basic-color'],
              notification: theme['color-primary-500'],
            },
          }}>
          <AuthProvider>
            <NavigationStack />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
