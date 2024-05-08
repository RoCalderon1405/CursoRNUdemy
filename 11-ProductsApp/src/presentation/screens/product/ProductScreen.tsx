import {MainLayout} from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-products-byId';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationStack';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import {useRef} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {Gender, Size} from '../../../domain/entities/product';
import {MyIcon} from '../../components/ui/MyIcon';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];
const gender: Gender[] = [Gender.Kid, Gender.Men, Gender.Unisex, Gender.Women];

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const theme = useTheme();
  const productIdRef = useRef(route.params.productId);
  const {productId} = route.params;

  const {data: product} = useQuery({
    queryKey: ['product', productIdRef],
    queryFn: () => getProductById(productIdRef.current),
  });

  if (product === undefined) {
    return <MainLayout title="Cargando..." />;
  }

  return (
    <MainLayout title={product?.title} subTitle={`Precio: ${product?.price}`}>
      <ScrollView style={{flex: 1}}>
        <Layout>
          <FlatList
            data={product.images}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <FadeInImage
                uri={item}
                style={{height: 200, width: 200, marginHorizontal: 7}}
              />
            )}
          />
        </Layout>

        {/* Formulario */}
        <Layout style={{marginHorizontal: 10}}>
          <Input
            label="Título"
            value={product.title}
            style={{marginVertical: 5}}
          />
          <Input
            label="Slug"
            value={product.slug}
            style={{marginVertical: 5}}
          />
          <Input
            label="Descripción"
            value={product.description}
            style={{marginVertical: 5}}
          />
        </Layout>

        {/* Precio Inventario */}
        <Layout
          style={{
            marginVertical: 5,
            marginHorizontal: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <Input
            label="Precio"
            value={product.price.toString()}
            style={{flex: 1}}
          />
          <Input
            label="Inventario"
            value={product.stock.toString()}
            style={{flex: 1}}
          />
        </Layout>

        {/* Selectores */}
        <ButtonGroup
          style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
          size="small"
          appearance="outline">
          {sizes.map(size => (
            <Button
              key={size}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-200'] : undefined,
              }}>
              {size}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup
          style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
          size="small"
          appearance="outline">
          {gender.map(gender => (
            <Button
              key={gender}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-200'] : undefined,
              }}>
              {gender}
            </Button>
          ))}
        </ButtonGroup>

        {/* Botón de guardar */}

        <Button
          accessoryLeft={<MyIcon name="save-outline" white />}
          style={{margin: 15}}
          onPress={() => console.log('Guardar')}>
          Guardar
        </Button>

        <Text>{JSON.stringify(product, null, 2)}</Text>

        <Layout style={{height: 200}} />
      </ScrollView>
    </MainLayout>
  );
};
