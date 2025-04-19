import { Search } from "@/components";
import styles from "../../components/Select.module.css";
import { X } from "lucide-react";

type Props = {
  close: () => void;
  handleTypeSelection: (articleType: string) => void
};


const articleTypes = [
  "Blog Post",
  "Essay",
  "Perspective",
  "Primer",
  "Report",
  "Research Article",
  "Short Report"

]

const SelectType = ({ close, handleTypeSelection }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`flex justify-between items-center`}>
        <p>Select Type</p>
        <button onClick={close} className="cursor-pointer">
          <X />
        </button>
      </div>

      <Search />

      {articleTypes.map((article) => <div className="cursor-pointer" onClick={() => handleTypeSelection(article)}>{article}</div> ) }
    </div>
  );
};

export default SelectType;
