import {Button, Input, Layout, Spinner, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationStack';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {login} = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: 'test1@google.com',
    password: 'Abc123',
  });
  const [isLogin, setIsLogin] = useState(false);
  const {height} = useWindowDimensions();

  const onLogin = async () => {
    setIsLogin(true);
    if (form.email.length === 0 || form.password.length === 0) return;
    console.log(`login ${form.email}`);
    setIsPosting(true);
    const wasSuccessfull = await login(form.email, form.password);
    setIsPosting(false);
    if (wasSuccessfull) return;
    setIsLogin(false);

    Alert.alert('Error', 'Usuario o contraseña incorrectos');
  };
  return (
    <Layout style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text>Por favor, ingresa para continuar</Text>
        </Layout>

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{marginBottom: 10}}
            value={form.email}
            onChangeText={email => setForm({...form, email})}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{marginBottom: 10}}
            value={form.password}
            onChangeText={password => setForm({...form, password})}
          />

          <Layout style={{height: 20}} />

          <Layout
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {!isLogin ? (
              <Button
                style={{width: '100%'}}
                disabled={isPosting}
                accessoryRight={<MyIcon name="arrow-forward-outline" white />}
                onPress={onLogin}>
                Ingresa
              </Button>
            ) : (
              <Spinner size="large" />
            )}
          </Layout>

          <Layout style={{height: 50}} />

          <Layout
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text>¿No tienes una Cuenta?</Text>
            <Text
              status="primary"
              category="s1"
              onPress={() => navigation.navigate('RegisterScreen')}>
              {''} Crea una.
            </Text>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
