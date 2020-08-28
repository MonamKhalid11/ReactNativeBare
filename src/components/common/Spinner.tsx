import React, { FC, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemeContext } from 'react-native-elements';

const Spinner: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.colors?.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Spinner;
