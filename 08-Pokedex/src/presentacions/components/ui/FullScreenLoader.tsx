import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export const FullScreenLoader = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <ActivityIndicator color="white" size={50} />
    </View>
  );
};
