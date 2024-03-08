import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({label, onPress}: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
