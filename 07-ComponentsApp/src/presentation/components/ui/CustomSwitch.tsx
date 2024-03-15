import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value:boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}: Props) => {
  return (
    <View style={styles.switchRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}

      <Switch
        trackColor={{false: '#b1b1b1', true: '#00d435'}}
        thumbColor={isOn ? '#ffffff' : '#383838'}
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
