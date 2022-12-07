import { Card } from "../../ui";

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = (props: AuthWrapperProps) => {
  const { children } = props;

  return <Card className="w-full p-10">{children}</Card>;
};

export default AuthWrapper;
