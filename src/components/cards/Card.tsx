import React, { FC, useContext } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from 'react-native-elements';

import defaultStyles from 'src/styles/defaultStyles';

interface Props {
  height: number;
  width?: number;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Card: FC<Props> = ({ children, height, width, flat, style }) => {
  const { theme } = useContext(ThemeContext);
  const getStyle = () => {
    return [
      styles.container,
      { height, width },
      flat ? { borderWidth: 1.5, borderColor: theme.colors?.primary } : { ...defaultStyles.raised },
      style,
    ];
  };
  return <View style={getStyle()}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginVertical: 15,
  },
});
export default Card;
