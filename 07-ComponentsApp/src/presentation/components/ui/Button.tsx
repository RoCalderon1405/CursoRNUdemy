import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

interface Props {
  text?: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}

export const Button = ({text, styles, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
        },
        styles,
      ]}>
      <Text style={globalStyles.btnPrimaryText}>{text}</Text>
    </Pressable>
  );
};
