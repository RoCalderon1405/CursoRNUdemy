import {Layout, Spinner} from '@ui-kitten/components';
import React from 'react';

export const LoadingScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Spinner status="primary" size="large" />
    </Layout>
  );
};
