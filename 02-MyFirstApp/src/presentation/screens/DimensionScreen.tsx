import React from 'react';
import {Dimensions, useWindowDimensions} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const DimensionScreen = () => {
  //   const {height, width} = Dimensions.get('window');
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.9,
          }}></View>
      </View>
      <View>
        <Text style={styles.title}>h:{height}</Text>
        <Text style={styles.title}>w:{width}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    display: 'flex',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
});
