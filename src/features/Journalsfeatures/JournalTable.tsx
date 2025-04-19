import { Journal } from "@/interface";
import styles from "../../components/Table.module.css";
// import { Journal } from "./JournalDashBoard";
import JournalTableItem from "./JournalTableItem";
import Pagination from "@/components/Pagination";

type Props = {
  data: Journal[];
  handleDoublePrevious: () => void;
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDoubleNext: () => void;
  handleStatusChange: (id: string, newStatus: string) => void;
};

const JournalTable = ({
  data,
  handleDoubleNext,
  handleNext,
  handleDoublePrevious,
  handlePrevious,
  handleStatusChange,
  currentPage,
  totalPages,
}: Props) => {
  return (
    <div className="table-responsive space-y-5">
      <table className={`${styles.tableStyle}`}>
        <thead>
          <tr>
            {/* {tableHead.map((th, index) => (
              <th className={`${styles.thStyle}`} key={index}>
                {th}
              </th>
            ))} */}

            <th className={`${styles.thStyle}`}>ID</th>
            <th className={`${styles.thStyle}`}>Category</th>
            <th className={`${styles.thStyle}`}>Title</th>
            <th className={`${styles.thStyle}`}>Date Uploaded</th>
            <th className={`${styles.thStyle}`}>Articles</th>
            <th className={`${styles.thStyle}`}>Status</th>
            <th className={`${styles.thStyle}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <JournalTableItem
              dataItem={item}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <Pagination
        handleDoubleNext={handleDoubleNext}
        handleDoublePrevious={handleDoublePrevious}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default JournalTable;
