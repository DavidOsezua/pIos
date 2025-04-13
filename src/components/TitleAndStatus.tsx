import Plus from "./svgComponent/plus";
import styles from "./TitleAndStatus.module.css";

const TitleAndStatus = () => {
  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Title</h3>

      <div className={`${styles.cardContainer}`}>
        <button className={`${styles.btn}`} onClick={() => {}}>
          <Plus />
          Create
        </button>

        {/* {data.statusData.map((componentData) => (
          <div
            key={``}
            className={`${styles.card} ${styles[componentData.colorID]}`}
          >
            <h3>{componentData.status}</h3>
            <span>{componentData.numbers}</span>
          </div>
        ))} */}

        <div key={``} className={`${styles.card} ${styles.total}`}>
          <h3>Total</h3>
          <span>2000</span>
        </div>

        <div key={``} className={`${styles.card} ${styles.approve}`}>
          <h3>Approve</h3>
          <span>2000</span>
        </div>

        <div key={``} className={`${styles.card} ${styles.pending}`}>
          <h3>Pending</h3>
          <span>2000</span>
        </div>

        <div key={``} className={`${styles.card} ${styles.inactive}`}>
          <h3>Inactive</h3>
          <span>2000</span>
        </div>
      </div>
    </div>
  );
};

export default TitleAndStatus;
