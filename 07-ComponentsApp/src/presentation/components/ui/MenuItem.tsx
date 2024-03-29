import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { Separator } from './Separator';

interface Props {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({name, icon, component, isFirst, isLast}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <Icon
            name={icon}
            size={15}
            style={{marginRight: 10}}
            color={colors.primary}
          />
          <Text>{name}</Text>
          <Icon
            name="chevron-forward-outline"
            size={15}
            style={{marginLeft: 'auto', color: colors.primary}}
          />
        </View>
      {!isLast ? <Separator isMenu/> : null}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
