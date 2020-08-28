import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-elements';

interface Props {
  error: string;
  visible: boolean;
}
const ErrorMessage: FC<Props> = ({ error, visible }) => {
  const { t } = useTranslation();
  if (!visible || !error) {
    return null;
  }

  return <Text style={styles.error}>{t(error)}</Text>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    lineHeight: 20,
    color: 'red',
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
});
export default ErrorMessage;
