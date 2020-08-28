import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from 'src/common/routes';
import Header from '../header/Header';
import HomeScreen from 'src/screens/home/HomeScreen';
import HelloScreen from 'src/screens/hello/HelloScreen';
import FilterScreen from 'src/screens/filter/FilterScreen';



//Put the screens here
//  [Routes.SomeRoute]: undefined ==> Without params
//  [Routes.OtherRoute]: { id: string } ==> With Params

export type StackParamList = {
  [Routes.Home]: undefined;
  [Routes.Hello]: { name: string };
  [Routes.Filter]: undefined;
};

const RootStack = () => {
  const Stack = createStackNavigator<StackParamList>();
  return (
    <Stack.Navigator screenOptions={Header}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.Hello} component={HelloScreen} />
      <Stack.Screen name={Routes.Filter} component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
