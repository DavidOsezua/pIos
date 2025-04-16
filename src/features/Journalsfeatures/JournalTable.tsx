import styles from "../../components/Table.module.css";

type Props = {};

const JournalTable = (props: Props) => {
  return (
    <div className="table-responsive">
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
          <tr>
            <td className={`${styles.tdStyle}`}>1</td>
            <td className={`${styles.tdStyle}`}>PLOS Healthline</td>
            <td className={`${styles.tdStyle}`}>PLOS Global Public Health</td>
            <td className={`${styles.tdStyle}`}>Saturday, 19 Aug 2024</td>
            <td className={`${styles.tdStyle}`}>45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JournalTable;
