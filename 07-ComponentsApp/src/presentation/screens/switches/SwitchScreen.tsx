import {Switch, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          text="¿Está activo?"
          onChange={(value: any) => setState({...state, isActive: value})}
        />

        <Separator style={{borderTopColor:'#3300ac'}}/>

        <CustomSwitch
          isOn={state.isHungry}
          text="¿Está hambriento?"
          onChange={(value: any) => setState({...state, isHungry: value})}
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          text="¿Está feliz?"
          onChange={(value: any) => setState({...state, isHappy: value})}
        />
      </Card>
    </CustomView>
  );
};
