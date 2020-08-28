import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';

import RootNavigator from './src/nav/root/RootNavigator';
import theme from './src/styles/theme';
import './i18n';
import { store } from './src/store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
