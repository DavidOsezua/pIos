import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modalHandler: () => void;
};

const Modal = ({ children, modalHandler }: Props) => {
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  // const { modal, modalHandler } = useModal() || {};
  return ReactDOM.createPortal(
    <>
      <>
        {/* Backdrop */}
        <div className={`${styles.overlay2}`} onClick={modalHandler}></div>

        <div className={`z-[1000] w-full  lg:w-[50%] ${styles.modal}`}>
          {/* <button className="absolute top-0 right-">
            <FaTimes />
          </button> */}
          {children}
        </div>
      </>
    </>,
    portalRoot
  );
};

export default Modal;
