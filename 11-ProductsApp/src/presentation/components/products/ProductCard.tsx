import React from 'react';
import {Image} from 'react-native';
import {Product} from '../../../domain/entities/product';
import {Card, Text} from '@ui-kitten/components';
import {FadeInImage} from '../ui/FadeInImage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/NavigationStack';

interface Props {
  product: Product;
}

export const ProductCard = ({product}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Card
      style={{flex: 1, backgroundColor: 'f9f9f9', margin: 3}}
      onPress={() =>
        navigation.navigate('ProductScreen', {productId: product.id})
      }>
      {product.images.length === 0 ? (
        <Image source={require('../../../assets/noImage.png')} />
      ) : (
        <FadeInImage
          uri={product.images[0]}
          style={{flex: 1, width: '100%', height: 200}}
        />
      )}
      <Text numberOfLines={2} style={{textAlign: 'center'}}>
        {' '}
        {product.title}
      </Text>
    </Card>
  );
};
