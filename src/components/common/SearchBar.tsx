import React, { FC, useContext } from 'react';
import { View, StyleSheet ,StyleProp ,ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

interface Props {
  onChangeText: (value: string) => void;
  containerStyle:StyleProp<ViewStyle>;
  placeholder:string;
}
const SearchBar: FC<Props> = ({ onChangeText ,containerStyle,placeholder }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { borderColor: theme.colors?.grey2 },containerStyle]}>
      <Input
        leftIcon={<Icon name="magnify" color={theme.colors?.grey3} size={22} style={styles.icon} />}
        placeholder={placeholder ? placeholder :t('common:search')}
        placeholderTextColor={theme.colors?.grey1}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onChangeText={(value) => onChangeText(value)}
      />
    </View>
  );
};
// TODO input is not centering in container
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: 45,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
});
export default SearchBar;
