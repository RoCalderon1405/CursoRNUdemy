import {MainLayout} from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-products-byId';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationStack';
import {Text} from '@ui-kitten/components';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const {productId} = route.params;

  const {data: product} = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
  });

  if (!product) return <MainLayout title="Cargando..." />;

  return (
    <MainLayout title={product.title} subTitle={`Precio: ${product.price}`}>
      <Text>hola</Text>
    </MainLayout>
  );
};
