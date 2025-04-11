import { ReactNode } from "react";
import { AuthenticationNavbar } from "@/components";
import FooterTwo from "@/components/FooterTwo";

type Props = {
  children: ReactNode;
};

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div>
      <AuthenticationNavbar />
      <main>{children}</main>
      <FooterTwo />
    </div>
  );
};

export default AuthenticationLayout;
