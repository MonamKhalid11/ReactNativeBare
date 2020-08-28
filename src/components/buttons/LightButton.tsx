import React, { FC, useContext } from 'react';
import { Button, ThemeContext, ButtonProps } from 'react-native-elements';

const LightButton: FC<ButtonProps> = ({ ...otherProps }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Button
      buttonStyle={{
        backgroundColor: 'white',
      }}
      titleStyle={{
        color: theme.colors?.grey3,
      }}
      {...otherProps}
    />
  );
};
export default LightButton;
