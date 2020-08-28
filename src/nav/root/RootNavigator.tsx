import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './RootStack';

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default RootNavigator;
