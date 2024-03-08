import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigation';

const products = [
  {
    id: 1,
    name: 'Producto 1',
  },
  {
    id: 2,
    name: 'Producto 2',
  },
  {
    id: 3,
    name: 'Producto 3',
  },
  {
    id: 4,
    name: 'Producto 4',
  },
  {
    id: 5,
    name: 'Producto 5',
  },
  {
    id: 6,
    name: 'Producto 6',
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() => {
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              });
            }}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};
