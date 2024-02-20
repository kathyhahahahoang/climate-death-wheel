import styles from "./Modal.module.scss";
import modal from "../img/modal.webp";
import modalSmall from "../img/modal-mobile.webp";
import { useInfoContext } from "../store/info-context.tsx";
import React from "react";

type ModalProps = {
  onModalHandler: () => void;
  onReadMore: () => void;
};

const Modal = ({ onModalHandler, onReadMore }: ModalProps) => {
  const { title, text, image } = useInfoContext();

  return (
    <div>
      <div className={styles.overlay} onClick={onModalHandler}></div>

      <div className={styles.container}>
        <picture>
          <source media="(orientation: portrait)" srcSet={modalSmall} />
          <source media="(orientation: landscape)" srcSet={modal} />

          <img
            className={styles.background}
            src={modal}
            alt="Cardboard background"
          />
        </picture>
        <div className={styles.close} onClick={onModalHandler}>
          x
        </div>
        <div
          className={styles["left-container"]}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={styles["right-container"]}>
          <div className={styles.heading}>{title}</div>
          <div className={styles.text}>{text}</div>
          <button className={styles.button} onClick={onReadMore}>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
