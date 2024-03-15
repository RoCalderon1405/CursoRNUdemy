import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedBounce,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={sytles.container}>
      <Animated.View
        style={[
          sytles.purpleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedBounce}]},
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        style={{marginTop: 15}}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
