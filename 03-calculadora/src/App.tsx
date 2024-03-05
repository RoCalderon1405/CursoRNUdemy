import {StatusBar, Text, View} from 'react-native';
import {styles} from './presentation/theme/app-theme';
import CalculatorScreen from './presentation/screens/CalculatorScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
