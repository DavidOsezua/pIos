import CreateAndStatusCard from "@/components/CreateAndStatusCard";
import styles from "../../components/TitleAndStatus.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";
import ArticleForm from "./ArticleForm";

type Props = {
  total: number;
  approved: number;
  pending: number;
  inactive: number;
};

const CreateArticlesAndShowStatus = ({
  total,
  approved,
  pending,
  inactive,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Articles</h3>

      <CreateAndStatusCard
        btnText=""
        clickFn={modalHandler}
        total={total}
        approved={approved}
        pending={pending}
        inactive={inactive}
      />

      {openModal && (
        <Modal modalHandler={modalHandler}>
          <ArticleForm />
        </Modal>
      )}
    </div>
  );
};

export default CreateArticlesAndShowStatus;
