import { X } from "lucide-react";
import styles from "../../components/Select.module.css";
import { Search } from "@/components";
import { Journal } from "@/interface";

type Props = {
  close: () => void;
  journals: Journal[];
  handleJournalSelection: (journal: Journal) => void;
};

const SelectJournal = ({ close, journals, handleJournalSelection }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`flex justify-between items-center`}>
        <p>Select Journal</p>
        <button onClick={close} className="cursor-pointer">
          <X />
        </button>
      </div>

      <Search />

      <div className={`${styles.allBands}`}>
        {journals.map((journal) => (
          <>
            <div onClick={() => handleJournalSelection(journal)}>
              {journal.title}
            </div>
            <div className={`${styles.hr}`}></div>{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectJournal;
