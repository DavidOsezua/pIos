import { Plus } from "lucide-react";
import styles from "../../components/TitleAndStatus.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";
import CategoryForm from "./CategoryForm";
import { CategoryInterface } from "@/interface";
// import { Category } from "./CategoryDashboard";



type Props = {
  total: number;
  active: number;
  inactive: number;
  setData: React.Dispatch<React.SetStateAction<CategoryInterface[]>>
};



const CreateCategoryAndShowStatus = ({ active, total, inactive, setData }: Props) => {
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

          <div key={`total`} className={`${styles.card} ${styles.total}`}>
            <h3>Total</h3>
            <span>{total}</span>
          </div>
          <div key={`active`} className={`${styles.card} ${styles.approve}`}>
            <h3>Active</h3>
            <span>{active}</span>
          </div>

          <div key={`inactive`} className={`${styles.card} ${styles.inactive}`}>
            <h3>Inactive</h3>
            <span>{inactive}</span>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal modalHandler={modalHandler}>
          <CategoryForm closeForm={modalHandler} setData={setData}/>
        </Modal>
      )}
    </>
  );
};

export default CreateCategoryAndShowStatus;
