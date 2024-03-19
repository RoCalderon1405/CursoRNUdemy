import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadNumber = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        onEndReached={loadNumber}
        onEndReachedThreshold={0.9}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemsProps {
  number: number;
}

const ListItem = ({number}: ListItemsProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400/`}
      style={{height: 400, width: '100%'}}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400/`}}
    //   style={{height: 400, width: '100%'}}
    // />
  );
};
