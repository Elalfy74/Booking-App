import Heading from "../shared/heading";
import Wrapper from "../shared/wrapper";
import PasswordRecoveryForm from "./password-recovery-form";

const PasswordRecovery = () => {
  return (
    <Wrapper>
      <Heading label="Password Recovery" />
      <p className="mb-8 text-sm text-mainGray">
        Enter your email to recover your password
      </p>
      <PasswordRecoveryForm />
    </Wrapper>
  );
};

export default PasswordRecovery;
