import Plus from "./svgComponent/plus";
import styles from "./TitleAndStatus.module.css";

type Props = {
  btnText: string;
};

const CreateAndStatusCard = ({ btnText }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <button className={`${styles.btn}`} onClick={() => {}}>
        <Plus />
        Create
      </button>

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
  );
};

export default CreateAndStatusCard;
