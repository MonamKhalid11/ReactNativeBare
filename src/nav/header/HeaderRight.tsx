import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { StackParamList } from '../root/RootStack';
import { Routes } from 'src/common/routes';

interface Props {}
const HeaderRight: FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <Icon
        style={styles.padding}
        name="home-outline"
        size={26}
        onPress={() => navigation.navigate(Routes.Home)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  padding: {
    paddingHorizontal: 10,
  },
});
export default HeaderRight;
