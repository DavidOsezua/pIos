import { Plus } from "lucide-react";
import styles from "../../components/TitleAndStatus.module.css";

type Props = {};

const CreateCategoryAndShowStatus = (props: Props) => {
  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Articles</h3>

      <div className={`${styles.cardContainer}`}>
        <button className={`${styles.btn} cursor-pointer`} onClick={() => {}}>
          <Plus />
          Create
        </button>

        <div key={``} className={`${styles.card} ${styles.total}`}>
          <h3>Total</h3>
          <span>Total</span>
        </div>
        <div key={``} className={`${styles.card} ${styles.approve}`}>
          <h3>Active</h3>
          <span>200</span>
        </div>

        <div key={``} className={`${styles.card} ${styles.inactive}`}>
          <h3>Inactive</h3>
          <span>300</span>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryAndShowStatus;
