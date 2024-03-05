import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={sytles.container}>
      <View style={sytles.purpleBox}></View>
      <View style={sytles.orangeBox}></View>
      <View style={sytles.greenBox}></View>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    // height:150,
    // width:300,
    backgroundColor: '#28c4d9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#e76813',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    // top: 0,
    // left: 0,
    
  },
});
