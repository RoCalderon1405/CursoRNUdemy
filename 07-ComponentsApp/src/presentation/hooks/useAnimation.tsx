import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedBounce = useRef(new Animated.Value(-200)).current;

  const fadeIn = ({toValue = 1, duration = 300, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);

    // Animated.timing(animatedBounce, {
    //   toValue: toValue,
    //   duration: duration,
    //   useNativeDriver: true,
    //   easing: Easing.bounce,
    // }).start(callback);
  };

  const fadeOut = ({toValue = 0, duration = 300, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // () => {animatedBounce.resetAnimation()}
  };
  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedBounce.setValue(initialPosition);
    Animated.timing(animatedBounce, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    // Properties
    animatedOpacity,
    animatedBounce,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
