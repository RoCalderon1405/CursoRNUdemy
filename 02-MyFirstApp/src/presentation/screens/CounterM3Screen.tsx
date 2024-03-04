import {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {globalSyles} from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);
  console.log(count);

  return (
    <View style={globalSyles.centerContainer}>
      <Text style={globalSyles.title}>{count}</Text>
      {/* <Icon name='accessibility-outline' color='blue' size={35}/> */}
      <FAB
        // label="incrementar"
        style={globalSyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(10)}
        icon="add"
      />
    </View>
  );
};
