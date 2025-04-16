import styles from "../../components/TitleAndStatus.module.css";

import CreateAndStatusCard from "@/components/CreateAndStatusCard";

type Props = {};

const CreateJournalsAndShowStatus = (props: Props) => {
  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Journals</h3>

      <CreateAndStatusCard />
    </div>
  );
};

export default CreateJournalsAndShowStatus;
