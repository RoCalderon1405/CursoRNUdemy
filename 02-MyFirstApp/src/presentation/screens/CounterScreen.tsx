import {useState} from 'react';
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PrimaryButton} from '../components/shared';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  //   const increment = () => setCount(count + 1);
  //   const resetCount = () => setCount(0);
  //   const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <PrimaryButton
        label="Incrementar"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#5856D6',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonPressed: {
    backgroundColor: '#3a38a0',
  },
});
