import {useNavigation} from '@react-navigation/native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {JSXElementConstructor, ReactElement} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MyIcon} from '../components/ui/MyIcon';

interface Props {
  title: string;
  subTitle: string;

  rightAction?: () => void;
  rightActionIcon?: string;

  children: React.ReactNode;
}

export const MainLayout = ({
  title,
  subTitle,
  rightAction,
  rightActionIcon,
  children,
}: Props) => {
  const {top} = useSafeAreaInsets();
  const {canGoBack, goBack} = useNavigation();

  const renderBackAction = () => {
    <TopNavigationAction
      icon={<MyIcon name="arrow-back-outline" />}
      onPress={goBack}
    />;
  };
  return (
    <Layout style={{paddingTop: top}}>
      <TopNavigation
        title={title}
        subtitle={subTitle}
        alignment="center"
        // accessoryLeft={renderBackAction}
      />
      <Divider />
      <Layout style={{height: '100%'}}>{children}</Layout>
    </Layout>
  );
};
