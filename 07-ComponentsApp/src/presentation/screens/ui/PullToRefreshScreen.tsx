import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <CustomView margin>
        <Title text="Pull to Refresh" safe />
      </CustomView>
    </ScrollView>
  );
};
