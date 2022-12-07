import useAuthModal, { ModalContent } from "../../../store/auth-modal-store";
import {
  AuthActions,
  AuthDivider,
  AuthHeading,
  AuthWrapper,
  SocialLogin,
} from "../shared";
import SignUpForm from "./sign-up-form";

const SignUp = () => {
  const changeContent = useAuthModal((state) => state.changeContent);

  return (
    <AuthWrapper>
      <AuthHeading>Let&apos;s go</AuthHeading>

      <SocialLogin />

      <AuthDivider />

      <SignUpForm />

      <AuthActions
        text="Already have an account?"
        label="Sign in"
        handleClick={() => changeContent(ModalContent.LOGIN)}
      />
    </AuthWrapper>
  );
};

export default SignUp;
