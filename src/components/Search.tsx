import styles from "./Search.module.css";
import SearchIcon from "./svgComponent/SearchIcon";

const Search = () => {
  return (
    <div className={`${styles.secondColumn}`}>
      {/* {pageType === "bands" || pageType === "venue" ? (
        <div className="w-full">Export</div>
      ) : (
        ""
      )} */}

      <div className={`${styles.inputContainer}`}>
        <SearchIcon width={`20`} height={`18`} />
        <input placeholder="Search" className={`${styles.input}`} />
      </div>
    </div>
  );
};

export default Search;
