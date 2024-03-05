import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: 10,
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
    position: 'relative',
  },
  box1: {
    backgroundColor: '#3f3dac',
  },
  box2: {
    backgroundColor: '#302f83',
  },
  box3: {
    backgroundColor: '#202b69',
  },
});
