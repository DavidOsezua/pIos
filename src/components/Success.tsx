import React from "react";
import styles from "./SuccessFailedCard.module.css";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Check from "./svgComponent/Check";

type Props = {
  message: string;
  modalHandler: () => void;
  description: string;
};

const Success = ({ message, modalHandler, description }: Props) => {
  return (
    <div className={`${styles.successCard} relative`}>
      <button
        className={`absolute top-[20px] right-[20px]`}
        onClick={modalHandler}
      >
        <X />
      </button>
      <Check />
      <p>{message}</p>
      <p className="text-[0.8rem]">{description}</p>

      <Button className="w-full bg-accentone text-white">Close</Button>
      <NavLink to="/">
        <Button className="w-full">Home</Button>
      </NavLink>
    </div>
  );
};

export default Success;
