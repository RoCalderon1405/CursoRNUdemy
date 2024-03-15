import {Switch, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <CustomView style={{}}>
      <Card>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Card>
    </CustomView>
  );
};
