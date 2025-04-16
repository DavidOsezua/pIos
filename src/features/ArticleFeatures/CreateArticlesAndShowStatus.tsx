import CreateAndStatusCard from "@/components/CreateAndStatusCard";
import styles from "../../components/TitleAndStatus.module.css";

type Props = {};

const CreateArticlesAndShowStatus = (props: Props) => {
  return (
    <div className={`${styles.titleAndStatusContainer}`}>
      <h3 className={`${styles.title}`}>Articles</h3>

      <CreateAndStatusCard btnText="" />
    </div>
  );
};

export default CreateArticlesAndShowStatus;
