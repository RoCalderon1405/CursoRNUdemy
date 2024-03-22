import 'react-native-gesture-handler';

import {StackNavigator} from './presentacions/navigator/StackNavigator';
import {ThemeContextProvider} from './presentacions/context/ThemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function PokedexApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
