import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, ThemeContext, ButtonProps } from 'react-native-elements';

const ClearButton: FC<ButtonProps> = ({ ...otherProps }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={[styles.button, { borderColor: theme.colors?.grey2 }]}
      titleStyle={[styles.title, { color: theme.colors?.grey2 }]}
      {...otherProps}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ClearButton;
