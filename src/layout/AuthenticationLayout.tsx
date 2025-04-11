import { ReactNode } from "react";
import { AuthenticationNavbar } from "@/components";

type Props = {
  children: ReactNode;
};

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div>
      <AuthenticationNavbar />
      <main>{children}</main>
    </div>
  );
};

export default AuthenticationLayout;
