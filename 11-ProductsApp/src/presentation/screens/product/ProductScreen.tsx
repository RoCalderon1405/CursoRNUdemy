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
import {MyIcon} from '../../components/ui/MyIcon';
import {Formik} from 'formik';
import {genders, sizes} from '../../../config/constants/constants';

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
    <Formik initialValues={product} onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
        <MainLayout title={values?.title} subTitle={`Precio: ${values?.price}`}>
          <ScrollView style={{flex: 1}}>
            <Layout>
              <FlatList
                data={values.images}
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
                style={{marginVertical: 5}}
                value={values.title}
                onChangeText={handleChange('title')}
              />
              <Input
                label="Slug"
                style={{marginVertical: 5}}
                value={values.slug}
                onChangeText={handleChange('slug')}
              />
              <Input
                label="Descripción"
                style={{marginVertical: 5}}
                value={values.description}
                onChangeText={handleChange('description')}
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
                style={{flex: 1}}
                value={values.price.toString()}
                onChangeText={handleChange('price')}
              />
              <Input
                label="Inventario"
                style={{flex: 1}}
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
              />
            </Layout>

            {/* Selectores */}
            <ButtonGroup
              style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
              size="small"
              appearance="outline">
              {genders.map(gender => (
                <Button
                  onPress={() => setFieldValue('gender', gender)}
                  key={gender}
                  style={{
                    flex: 1,
                    backgroundColor: values.gender.includes(gender)
                      ? theme['color-primary-200']
                      : undefined,
                  }}>
                  {gender}
                </Button>
              ))}
            </ButtonGroup>

            <ButtonGroup
              style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
              size="small"
              appearance="outline">
              {sizes.map(size => (
                <Button
                  onPress={() =>
                    setFieldValue(
                      'sizes',
                      values.sizes.includes(size)
                        ? values.sizes.filter(s => s !== size)
                        : [...values.sizes, size],
                    )
                  }
                  key={size}
                  style={{
                    flex: 1,
                    backgroundColor: values.sizes.includes(size)
                      ? theme['color-primary-200']
                      : undefined,
                  }}>
                  {size}
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

            <Text>{JSON.stringify(values, null, 2)}</Text>

            <Layout style={{height: 200}} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};
