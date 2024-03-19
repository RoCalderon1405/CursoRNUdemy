import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {Title} from './ui/Title';
import {Button} from './ui/Button';

export const ModalComponent = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1'}}>
        <View style={{paddingHorizontal: 10}}>
          <Title text="Modal Content" />
        </View>
      </View>
      <Button
        text="Cerrar"
        styles={{borderRadius: 0}}
        onPress={() => setisVisible(false)}
      />
    </Modal>
  );
};
