import { Form, Formik } from 'formik';

import { Button } from '../../ui';
import { AuthInput } from '../shared';
import {
  passwordRecoveryInitialValues,
  passwordRecoveryValidationSchema,
} from './password-recovery-form-helpers';

const PasswordRecoveryForm = () => {
  const handleSubmit = () => {};
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={passwordRecoveryInitialValues}
      validationSchema={passwordRecoveryValidationSchema}
    >
      <Form>
        <AuthInput
          label='E-mail'
          name='Email'
          placeHolder='Enter your email'
          type='email'
        />
        <Button className='mt-6 tracking-wide' fullWidth type='submit'>
          Reset Password
        </Button>
      </Form>
    </Formik>
  );
};

export default PasswordRecoveryForm;
