import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';
import { Button, ButtonProps } from 'react-native-elements';

const SubmitButton: FunctionComponent<ButtonProps> = ({ ...props }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} {...props} />;
};
export default SubmitButton;
