import prompt from 'react-native-prompt-android'

interface Options {
  title?: string;
  subtitle?: string;
  type?:
    | 'default'
    | 'email-address'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'plain-text'
    | 'secure-text';
  cancelable?: boolean;
  defaultValue?: string;
  placeholder?: string;

  onPress?: () => void;
}

export const ShowPromptAdapter = ({
  title = 'Promt',
  subtitle = 'Subtitle',
  type = 'plain-text',
  cancelable = false,
  defaultValue = 'test',
  placeholder = 'Placeholder',
  onPress,
}: Options) => {
  prompt(
    title,
    subtitle,
    [
      {
        text: 'Cancel',
        onPress: onPress,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: onPress,
      },
    ],
    {
      type: type,
      cancelable: cancelable,
      defaultValue: defaultValue,
      placeholder: placeholder,
    },
  );
};
