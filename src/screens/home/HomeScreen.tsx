import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import defaultStyles from 'src/styles/defaultStyles';
import HomeWelcomeText from './components/HomeWelcomeText';
import { Routes } from 'src/common/routes';
import Form from 'src/components/forms/Form';
import SubmitButton from 'src/components/forms/SubmitButton';
import { StackParamList } from 'src/nav/root/RootStack';
import FormField from 'src/components/forms/FormField';
import ClearButton from 'src/components/buttons/ClearButton';

// Add your Props Type here
interface Props {
  navigation: NavigationProp<StackParamList, Routes.Home>;
}
const HomeScreen: FC<Props> = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('common:error.nameRequired')),
  });

  return (
    <View style={styles.container}>
      <HomeWelcomeText iconName="ab-testing" />
      <Form
        initialValues={{
          name: '',
        }}
        onSubmit={({ name }) => {
          navigation.navigate(Routes.Hello, { name });
        }}
        validationSchema={validationSchema}>
        <FormField name="name" placeholder={t('common:welcome.typeName')} />
        <SubmitButton title={t('common:welcome.nextPage')} containerStyle={{ width: '100%' }} />
        <ClearButton
          title={t('common:language.switchTo')}
          onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
        />
        <SubmitButton title={t('common:welcome.nextPage')} containerStyle={{ width: '100%' }} onPress = {()=>navigation.navigate(Routes.Filter)} />

      </Form>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // flex: 1,
    ...defaultStyles.screenPadding,
  },
});
export default HomeScreen;
