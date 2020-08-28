import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import defaultStyles from 'src/styles/defaultStyles';
import { Text, ThemeContext } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  iconName: string;
}
const HomeWelcomeText: FC<Props> = ({ iconName }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text h1>{t('common:welcome.welcome')}</Text>
      <Icon
        name={iconName}
        size={28}
        color={theme.colors?.primary}
        style={{ marginVertical: 20 }}
      />
      <Text style={defaultStyles.text.p1}>{t('common:welcome.welcomeSubtitle')}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default HomeWelcomeText;
