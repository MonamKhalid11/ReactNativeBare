import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderOnlyBack = {
  headerShown: true,
  headerBackImage: () => <Icon name="arrow-left" size={26} />,
  headerTransparent: true,
  title: '',
  headerBackTitleVisible: false,
  headerLeftContainerStyle: { marginLeft: 20 },
} as StackNavigationOptions;

export default HeaderOnlyBack;
