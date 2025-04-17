import styles from "./Filter.module.css";

type Props = {
  status: string[];
  handleFilter: (item: string) => void;
  active: string;
};

const Filter = ({ status, handleFilter, active }: Props) => {
  return (
    <div className={`${styles.filteredButton}`}>
      {status.map((item) => (
        <button
          key={item}
          onClick={() => handleFilter(item)}
          className={`${styles.btn} ${active === item ? styles.active : ""}`}
        >
          {item}
        </button>
      ))}

      {/* <button onClick={() => {}} className={`${styles.btn} `}>
        Active
      </button>

      <button onClick={() => {}} className={`${styles.btn} `}>
        Inactive
      </button> */}
    </div>
  );
};

export default Filter;
