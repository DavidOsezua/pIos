import Button from "./Button";
import { X } from "lucide-react";
import styles from "./SuccessFailedCard.module.css";
import Error from "./svgComponent/Error";

type Props = {
  displayMessage: string;
  modalHandler: () => void;
};

const Failed = ({ displayMessage, modalHandler }: Props) => {
  return (
    <div className={`${styles.successCard} relative`}>
      <button
        className={`absolute top-[20px] right-[20px]`}
        onClick={modalHandler}
      >
        <X />
      </button>
      <Error />
      <p>{displayMessage}</p>

      <Button>Close</Button>
    </div>
  );
};

export default Failed;
