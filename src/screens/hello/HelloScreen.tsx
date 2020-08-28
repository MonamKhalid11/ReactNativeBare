import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { RouteProp } from '@react-navigation/native';

import defaultStyles from 'src/styles/defaultStyles';
import { StackParamList } from 'src/nav/root/RootStack';
import { Routes } from 'src/common/routes';

interface Props {
  route: RouteProp<StackParamList, Routes.Hello>;
}
const HelloScreen: FC<Props> = ({ route }) => {
  const { t } = useTranslation();
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text h1>{t('common:hello.hello', { name })}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    ...defaultStyles.screenPadding,
  },
});
export default HelloScreen;
