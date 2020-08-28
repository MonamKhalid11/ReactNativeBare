import React, { FC, ReactNode } from 'react';
import { Formik, FormikValues, FormikHelpers, FormikSharedConfig } from 'formik';
import { Schema } from 'yup';

interface Props {
  children: ReactNode;
  initialValues: FormikValues;
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void;
  validationSchema: Schema<any>;
  [x: string]: any;
}
const Form: FC<Props & FormikSharedConfig> = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}>
      {() => <>{children}</>}
    </Formik>
  );
};
export default Form;
