import styles from "./Search.module.css";
import SearchIcon from "./svgComponent/SearchIcon";

const Search = () => {
  return (
    <div>
      <div className={`${styles.inputContainer}`}>
        <SearchIcon width={`20`} height={`18`} />
        <input placeholder="Search" className={`${styles.input}`} />
      </div>
    </div>
  );
};

export default Search;
