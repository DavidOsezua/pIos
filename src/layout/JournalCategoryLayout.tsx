import { ReactNode } from "react";
import { JournalCategoryNavbar } from "@/components";
import FooterTwo from "@/components/FooterTwo";

type Props = {
  children: ReactNode;
  journalInfo?: {
    image: string | null;
    name: string | null;
}
};

const JournalCategoryLayout = ({ children, journalInfo }: Props) => {
  return (
    <div>
      <JournalCategoryNavbar journalInfo={journalInfo}/>
      <main>{children}</main>
      <FooterTwo />
    </div>
  );
};

export default JournalCategoryLayout;
