import {Alert, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {globalStyles} from '../../../config/theme/theme';
import {ShowPromptAdapter} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPrompt = () => {
    ShowPromptAdapter({
        title: 'Alert Title',
        subtitle:'hola'
    })
    // ! Código nativo
    // Alert.prompt(
    //   'Correo Electrónico',
    //   'Lorem ipsum dolor sit amet.',
    //   (valor: string) => console.log({valor}),
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />
      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />
      <Button text="Prompt - input" onPress={showPrompt} />

      <View style={{height: 10}} />
    </CustomView>
  );
};
