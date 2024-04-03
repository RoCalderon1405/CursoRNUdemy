import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationStack';
import {useUserStore} from '../../store/user/useUserStore';
import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {create} = useUserStore();
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

    const wasSuccessfull = await create(
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

          <Text>{JSON.stringify(form, null, 2)}</Text>

          <Layout>
            <Button
              accessoryRight={<MyIcon name="arrow-forward-outline" white />}
              onPress={createUser}>
              Crear
            </Button>
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
