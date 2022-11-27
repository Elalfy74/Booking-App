import Actions from "../shared/actions";
import Divider from "../shared/auth-divider";
import Heading from "../shared/heading";
import SocialLogin from "../shared/social-login";
import Wrapper from "../shared/wrapper";
import SignUpForm from "./sign-up-form";

const SignUp = () => {
  return (
    <Wrapper width="md">
      <Heading label="Let's go" />

      <SocialLogin />

      <Divider />

      <SignUpForm />

      <Actions text="Already have an account?" label="Sign in" path="#" />
    </Wrapper>
  );
};

export default SignUp;
