import styles from "./Filter.module.css";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className={`${styles.filteredButton}`}>
      {/* {data.status.map((item) => (
        <button
          key={item}
          onClick={() => handleFilter(item)}
          className={`${styles.btn} ${active === item ? styles.active : ""}`}
        >
          {item}
        </button>
      ))} */}

      <button onClick={() => {}} className={`${styles.btn} `}>
        Active
      </button>

      <button onClick={() => {}} className={`${styles.btn} `}>
        Inactive
      </button>
    </div>
  );
};

export default Filter;
