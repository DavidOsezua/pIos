import { Article } from "@/interface";
import styles from "../../components/Table.module.css";
// import { Article } from "./ArticleDashboard";
import ArticleTableItem from "./ArticleTableItem";
import Pagination from "@/components/Pagination";

type Props = {
  data: Article[];
  handleDoublePrevious: () => void;
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDoubleNext: () => void;
  handleStatusChange: (id: string, newStatus: string) => void;
};

const ArticleTable = ({
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
    <div className="table-responsive space-y-6">
      <table className={`${styles.tableStyle}`}>
        <thead>
          <tr>
            {/* {tableHead.map((th, index) => (
              <th className={`${styles.thStyle}`} key={index}>
                {th}
              </th>
            ))} */}

            <th className={`${styles.thStyle}`}>ID</th>
            <th className={`${styles.thStyle}`}>Title</th>
            <th className={`${styles.thStyle}`}>Journal</th>
            <th className={`${styles.thStyle}`}>Date Uploaded</th>
            <th className={`${styles.thStyle}`}>Types</th>
            <th className={`${styles.thStyle}`}>Status</th>
            <th className={`${styles.thStyle}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <ArticleTableItem
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

export default ArticleTable;
