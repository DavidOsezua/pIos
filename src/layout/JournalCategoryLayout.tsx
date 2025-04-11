import { ReactNode } from "react";
import { JournalCategoryNavbar } from "@/components";
import FooterTwo from "@/components/FooterTwo";

type Props = {
  children: ReactNode;
};

const JournalCategoryLayout = ({ children }: Props) => {
  return (
    <div>
      <JournalCategoryNavbar />
      <main>{children}</main>
      <FooterTwo />
    </div>
  );
};

export default JournalCategoryLayout;
