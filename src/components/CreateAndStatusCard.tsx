import { Journal } from "@/features/Journalsfeatures/JournalDashBoard";
import Plus from "./svgComponent/plus";
import styles from "./TitleAndStatus.module.css";

type Props = {
  btnText: string;
  clickFn: () => void;
  total: number;
  approved: number;
  pending: number;
  inactive: number;
};

const CreateAndStatusCard = ({
  btnText,
  clickFn,
  total,
  approved,
  pending,
  inactive,
}: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <button className={`${styles.btn} cursor-pointer`} onClick={clickFn}>
        <Plus />
        Create
      </button>

      <div key={``} className={`${styles.card} ${styles.total}`}>
        <h3>Total</h3>
        <span>{total}</span>
      </div>

      <div key={``} className={`${styles.card} ${styles.approve}`}>
        <h3>Approve</h3>
        <span>{approved}</span>
      </div>

      <div key={``} className={`${styles.card} ${styles.pending}`}>
        <h3>Pending</h3>
        <span>{pending}</span>
      </div>

      <div key={``} className={`${styles.card} ${styles.inactive}`}>
        <h3>Inactive</h3>
        <span>{inactive}</span>
      </div>
    </div>
  );
};

export default CreateAndStatusCard;
