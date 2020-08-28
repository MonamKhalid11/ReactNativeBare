import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Button, Overlay } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

interface Props {
  onPress: () => void;
  type: string;
  message: string;
  visible: boolean;
}
const AlertOverlay: FC<Props> = ({ onPress, type, message, visible = false }) => {
  const { t } = useTranslation();

  return (
    <Overlay isVisible={visible} overlayStyle={styles.overlay}>
      <View style={styles.container}>
        <Icon name="check" size={48} color={'rgba(46, 210, 82, 1)'} />
        <Text style={styles.type}>{t(`alerts:types.${type}`)}</Text>
        <Text style={styles.message}>{t(`alerts:messages.${message}`)}</Text>
        <Button containerStyle={styles.button} title={t('alerts:gotIt')} onPress={onPress} />
      </View>
    </Overlay>
  );
};
const styles = StyleSheet.create({
  overlay: {
    borderRadius: 10,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    minHeight: 240,
    padding: 20,
  },
  type: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    justifyContent: 'flex-end',
    width: '70%',
    marginTop: 'auto',
  },
});
export default AlertOverlay;
