import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : 'red'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
