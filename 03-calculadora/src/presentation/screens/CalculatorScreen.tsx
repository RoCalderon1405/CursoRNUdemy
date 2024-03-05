import {Text, View} from 'react-native';
import {styles} from '../theme/app-theme';
import { CalculatorButton } from '../components';

const CalculatorScreen = () => {
  return (
    <View style={styles.containerResults}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton />
      </View>
    </View>
  );
};

export default CalculatorScreen;
