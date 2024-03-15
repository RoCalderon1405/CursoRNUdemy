import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Input" />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            autoCapitalize="words"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 10}} />

        <Card>
          <Text>Name: {form.name}</Text>
          <Text>Email: {form.email}</Text>
          <Text>Phone: {form.phone}</Text>
        </Card>
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <View style={{marginBottom: 15}} />
      </CustomView>
      <View style={{marginBottom: 15}} />
    </ScrollView>
  );
};
