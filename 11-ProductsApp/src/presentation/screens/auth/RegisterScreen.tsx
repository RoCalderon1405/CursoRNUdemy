import {Button, Input, Layout, Spinner, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationStack';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {register} = useAuthStore();
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [isPosting, setIsPosting] = useState(false);
  const {height} = useWindowDimensions();

  const createUser = async () => {
    if (
      form.email.length === 0 ||
      form.password.length === 0 ||
      form.fullName.length === 0
    )
      return;

    setIsPosting(true);
    const wasSuccessfull = await register(
      form.email,
      form.password,
      form.fullName,
    );

    if (wasSuccessfull) {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
      return;
    }
    setIsPosting(false);
    Alert.alert('Error', 'Problema Creando usuario');
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text>Por favor, crea una cuenta continuar</Text>
        </Layout>

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre Completo"
            keyboardType="default"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="person-outline" />}
            style={{marginBottom: 10}}
            value={form.fullName}
            onChangeText={fullName => setForm({...form, fullName})}
          />
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

          {/* <Text>{JSON.stringify(form, null, 2)}</Text> */}

          <Layout>
            {!isPosting ? (
              <Button
                disabled={isPosting}
                accessoryRight={<MyIcon name="arrow-forward-outline" white />}
                onPress={createUser}>
                Crear
              </Button>
            ) : (
              <Layout style={{alignItems: 'center'}}>
                <Spinner status="primary" size="medium" />
              </Layout>
            )}
          </Layout>

          <Layout style={{height: 50}} />

          <Layout
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text>¿Tienes una Cuenta?</Text>
            <Text
              status="primary"
              category="s1"
              onPress={() => navigation.goBack()}>
              {''} Ingresar.
            </Text>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
