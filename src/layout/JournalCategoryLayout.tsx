import { ReactNode } from "react";
import { JournalCategoryNavbar } from "@/components";

type Props = {
  children: ReactNode;
};

const JournalCategoryLayout = ({ children }: Props) => {
  return (
    <div>
      <JournalCategoryNavbar />
      <main>{children}</main>
    </div>
  );
};

export default JournalCategoryLayout;
