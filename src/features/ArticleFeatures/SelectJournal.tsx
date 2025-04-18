import { X } from "lucide-react";
import styles from "../../components/Select.module.css";
import { Search } from "@/components";

type Props = {
  close: () => void;
};

const SelectJournal = ({ close }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`flex justify-between items-center`}>
        <p>Select Journal</p>
        <button onClick={close} className="cursor-pointer">
          <X />
        </button>
      </div>

      <Search />

      <div className={`${styles.allBands}`}></div>
    </div>
  );
};

export default SelectJournal;
