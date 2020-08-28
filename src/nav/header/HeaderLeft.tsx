import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Routes } from 'src/common/routes';
import { StackParamList } from '../root/RootStack';

interface Props {}
const HeaderLeft: FC<Props> = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      {route.name === Routes.Home ? (
        <Icon style={styles.padding} name="menu" size={26} />
      ) : (
        <Icon
          style={styles.padding}
          name="chevron-left"
          size={26}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={[styles.text, styles.padding]}>{t(`routes:${route.name}`)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  padding: {
    paddingHorizontal: 10,
  },
});
export default HeaderLeft;
