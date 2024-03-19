import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = ({
  text,
  safe = false,
  backgroundColor = colors.background,
}: Props) => {
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginBottom: 10,
        backgroundColor: backgroundColor,
      }}>
      {text}
    </Text>
  );
};
