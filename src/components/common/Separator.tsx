import React, { FC } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import defaultStyles from 'src/styles/defaultStyles';

interface Props {
  full?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Separator: FC<Props> = ({ full, style }) => {
  return <View style={[styles.separator, full && styles.full, style]} />;
};
const styles = StyleSheet.create({
  separator: {
    backgroundColor: defaultStyles.colors.grey1,
    height: 1,
  },
  full: {
    marginHorizontal: -defaultStyles.screenPadding.paddingHorizontal,
    width: '100%',
  },
});
export default Separator;
