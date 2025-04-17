import { Plus } from "lucide-react";
import styles from "../../components/TitleAndStatus.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";
import CategoryForm from "./CategoryForm";

type Props = {
  total: number;
  active: number;
  inactive: number;
};

const CreateCategoryAndShowStatus = ({ active, total, inactive }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.titleAndStatusContainer}`}>
        <h3 className={`${styles.title}`}>Articles</h3>

        <div className={`${styles.cardContainer}`}>
          <button
            className={`${styles.btn} cursor-pointer`}
            onClick={modalHandler}
          >
            <Plus />
            Create
          </button>

          <div key={``} className={`${styles.card} ${styles.total}`}>
            <h3>Total</h3>
            <span>{total}</span>
          </div>
          <div key={``} className={`${styles.card} ${styles.approve}`}>
            <h3>Active</h3>
            <span>{active}</span>
          </div>

          <div key={``} className={`${styles.card} ${styles.inactive}`}>
            <h3>Inactive</h3>
            <span>{inactive}</span>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal modalHandler={modalHandler}>
          <CategoryForm closeForm={modalHandler} />
        </Modal>
      )}
    </>
  );
};

export default CreateCategoryAndShowStatus;
