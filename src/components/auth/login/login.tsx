import { ModalContent, useAuthModal } from '@/store';

import {
  AuthActions,
  AuthDivider,
  AuthHeading,
  AuthWrapper,
  SocialLogin,
} from '../shared';
import LoginForm from './login-form';

const Login = () => {
  const changeContent = useAuthModal((state) => state.changeContent);

  return (
    <AuthWrapper>
      <AuthHeading>Welcome Back!</AuthHeading>

      <SocialLogin />

      <AuthDivider />

      <LoginForm />

      <AuthActions
        text=" Don't have an account?"
        label='Sign up'
        handleClick={() => changeContent(ModalContent.SIGNUP)}
      />
    </AuthWrapper>
  );
};

export default Login;
