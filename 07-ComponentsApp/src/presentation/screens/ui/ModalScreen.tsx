import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" />

      <Button text="Abrir Modal" onPress={() => setisVisible(true)} />

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
    </CustomView>
  );
};
