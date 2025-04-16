import styles from "../../components/TitleAndStatus.module.css";
import CreateAndStatusCard from "@/components/CreateAndStatusCard";

type Props = {};

const CreateCategoryAndShowStatus = (props: Props) => {
  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Articles</h3>

      <CreateAndStatusCard btnText="" />
    </div>
  );
};

export default CreateCategoryAndShowStatus;
