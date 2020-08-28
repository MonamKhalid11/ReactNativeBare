import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import defaultStyles from 'src/styles/defaultStyles';

interface Props {
  iconName: string;
  title: string;
  more?: boolean;
}
const SectionTitle: FC<Props> = ({ iconName, title, more }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={28} color={theme.colors?.primary} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      {more && (
        <Button
          type="clear"
          titleStyle={styles.more}
          buttonStyle={{ backgroundColor: 'transparent' }}
          title={t('common:seeMore')}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  icon: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexGrow: 1,
  },
  more: {
    fontSize: 14,
    color: defaultStyles.colors.grey2,
  },
});
export default SectionTitle;
