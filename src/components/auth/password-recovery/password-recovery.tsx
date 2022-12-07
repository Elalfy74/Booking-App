import { AuthHeading, AuthWrapper } from "../shared";
import PasswordRecoveryForm from "./password-recovery-form";

const PasswordRecovery = () => {
  return (
    <AuthWrapper>
      <AuthHeading>Password Recovery</AuthHeading>
      <p className="mb-8 text-sm text-mainGray">
        Enter your email to recover your password
      </p>
      <PasswordRecoveryForm />
    </AuthWrapper>
  );
};

export default PasswordRecovery;
