import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {AuthState, useAuthStore} from '../../store/auth/useAuthStore';
import {getProductsByPage} from '../../../actions/auth/products/get-products-by-page';
import {useQuery} from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';

export const HomeScreen = () => {
  const {user, token}: AuthState = useAuthStore();
  const {logout} = useAuthStore();

  const {isLoading, data: products} = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  });

  return (
    <MainLayout 
    title='TesloShop - Products'
    subTitle='Aplicación Administrativa'
    >
      <Text>Teslo</Text>
    </MainLayout>
  );
};
