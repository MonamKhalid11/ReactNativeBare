import React, { FC, useContext } from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, TextInputProps, View } from 'react-native';
// @ts-ignore
import TextInput from 'react-native-paper/lib/commonjs/components/TextInput/TextInput';

import ErrorMessage from './ErrorMessage';
import { ThemeContext } from 'react-native-elements';

interface Props {
  name: string;
  width?: string | number;
  placeholder: string;
  [x: string]: any;
}

const FormField: FC<Props & TextInputProps> = ({ name, width, placeholder, ...otherProps }) => {
  const formik = useFormikContext();
  const { handleChange, setFieldTouched } = formik;
  const { errors, touched, values } = formik as any;
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        label={placeholder}
        value={values[name]}
        onChangeText={handleChange(name)}
        mode="outlined"
        theme={{ colors: { primary: theme.colors?.primary } }}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
export default FormField;
