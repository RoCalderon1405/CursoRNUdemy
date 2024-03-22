import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (image: string) => {
  const colors = await ImageColors.getColors(image, {
    fallback: 'grey',
  });
};
