import DoublePrevious from "@/components/svgComponent/DoublePrevious";
import styles from "../../components/Table.module.css";
import { Journal } from "./JournalDashBoard";
import JournalTableItem from "./JournalTableItem";
import Previous from "@/components/svgComponent/Previous";
import Next from "@/components/svgComponent/Next";
import DoubleNext from "@/components/svgComponent/DoubleNext";

type Props = {
  data: Journal[];
  handleDoublePrevious: () => void;
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDoubleNext: () => void;
  handleStatusChange: (id: number, newStatus: string) => void;
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
      <div className="flex justify-center gap-2">
        <div>
          <button onClick={handleDoublePrevious} disabled={currentPage <= 2}>
            <DoublePrevious />
          </button>
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            <Previous />
          </button>
        </div>

        <p>
          {currentPage} of {totalPages}
        </p>

        <div>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <Next />
          </button>
          <button
            onClick={handleDoubleNext}
            disabled={currentPage >= totalPages - 1}
          >
            <DoubleNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalTable;
