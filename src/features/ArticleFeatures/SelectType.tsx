import { Search } from "@/components";
import styles from "../../components/Select.module.css";
import { X } from "lucide-react";

type Props = {
  close: () => void;
};

const SelectType = ({ close }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`flex justify-between items-center`}>
        <p>Select Type</p>
        <button onClick={close} className="cursor-pointer">
          <X />
        </button>
      </div>

      <Search />

      <div className={`${styles.allBands}`}></div>
    </div>
  );
};

export default SelectType;
