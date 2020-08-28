import React from 'react';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { DefaultTheme } from '@react-navigation/native';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = {
  headerLeft: () => <HeaderLeft />,
  headerRight: () => <HeaderRight />,
  headerLeftContainerStyle: { marginHorizontal: 20 },
  headerRightContainerStyle: { marginHorizontal: 20 },
  headerTitle: '',
  headerStyle: {
    backgroundColor: DefaultTheme.colors.background,
  },
} as StackHeaderOptions;

export default Header;
