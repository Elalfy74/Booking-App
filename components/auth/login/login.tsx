import Actions from "../shared/actions";
import Divider from "../shared/auth-divider";
import Heading from "../shared/heading";
import SocialLogin from "../shared/social-login";
import Wrapper from "../shared/wrapper";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <Wrapper>
      <Heading label="Welcome Back!" />

      <SocialLogin />

      <Divider />

      <LoginForm />

      <Actions text=" Don't have an account?" label="Sign up" path="#" />
    </Wrapper>
  );
};

export default Login;
