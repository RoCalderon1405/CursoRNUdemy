import React, { PropsWithChildren } from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#ffffff',
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
