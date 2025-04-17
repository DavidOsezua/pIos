import { useState } from "react";
import styles from "../../components/TitleAndStatus.module.css";

import CreateAndStatusCard from "@/components/CreateAndStatusCard";
import JournalsForm from "./JournalsForm";
import Modal from "@/components/Modal";

type Props = {
  total: number;
  approved: number;
  pending: number;
  inactive: number;
};

const CreateJournalsAndShowStatus = ({
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
    <>
      <div className={`${styles.titleAndStatusContainer}`}>
        <h3 className={`${styles.title}`}>Journals</h3>

        <CreateAndStatusCard
          btnText=""
          clickFn={modalHandler}
          total={total}
          approved={approved}
          pending={pending}
          inactive={inactive}
        />
      </div>
      {openModal && (
        <Modal modalHandler={modalHandler}>
          <JournalsForm closeForm={modalHandler} />
        </Modal>
      )}
    </>
  );
};

export default CreateJournalsAndShowStatus;
