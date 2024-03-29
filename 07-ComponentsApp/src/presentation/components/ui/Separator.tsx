import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  isMenu?: boolean;
}

export const Separator = ({style, isMenu}: Props) => {
  return (
    <View style={[isMenu ? {backgroundColor: colors.cardBackground} : null]}>
      <View style={[styles.container, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#1a57da',
    width: '90%',
    alignSelf: 'center',
    opacity: 0.5,
  },
});
