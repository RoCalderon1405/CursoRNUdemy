import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {AuthState, useAuthStore} from '../../store/auth/useAuthStore';

export const HomeScreen = () => {
  const {user,token}: AuthState = useAuthStore();
  console.log({user: user, token: token});
  const {logout} = useAuthStore();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>

      <Text>Bienvenido: {JSON.stringify(user, null, 2)} </Text>

      <Button accessoryLeft={<Icon name="log-out-outline" />} onPress={logout}>
        Cerrar Sesión
      </Button>
    </Layout>
  );
};
