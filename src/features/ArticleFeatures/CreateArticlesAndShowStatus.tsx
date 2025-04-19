import CreateAndStatusCard from "@/components/CreateAndStatusCard";
import styles from "../../components/TitleAndStatus.module.css";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import ArticleForm from "./ArticleForm";
import { api } from "@/services/endpoint";
import { Article, Journal } from "@/interface";

type Props = {
  total: number;
  approved: number;
  pending: number;
  inactive: number;
  setData: React.Dispatch<React.SetStateAction<Article[]>>
};

const CreateArticlesAndShowStatus = ({
  total,
  approved,
  pending,
  inactive,
  setData
}: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [journals, setJournals] = useState<Journal[]>([])


  useEffect(() => {
    api.get("/admin/journal").then((res) => {
          console.log(res.data)
          setJournals(res.data)
        })
  }, [])

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
          <ArticleForm journals={journals}  setData={setData} modalHandler={modalHandler}/>
        </Modal>
      )}
    </div>
  );
};

export default CreateArticlesAndShowStatus;
