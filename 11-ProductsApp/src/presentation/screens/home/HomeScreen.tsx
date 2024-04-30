import {Text} from '@ui-kitten/components';
import {AuthState, useAuthStore} from '../../store/auth/useAuthStore';
import {getProductsByPage} from '../../../actions/auth/products/get-products-by-page';
import {useQuery} from '@tanstack/react-query';
import {MainLayout} from '../../layouts/MainLayout';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ProductList} from '../../components/products/ProductList';

//test1@google.com
//Abc123

export const HomeScreen = () => {
  const {user, token}: AuthState = useAuthStore();
  const {logout} = useAuthStore();

  const {isLoading, data: products = []} = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  });

  return (
    <MainLayout
      title="TesloShop - Products"
      subTitle="Aplicación Administrativa">
      {isLoading ? <FullScreenLoader /> : <ProductList products={products} />}
    </MainLayout>
  );
};
