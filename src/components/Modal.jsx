import styles from "./Modal.module.css";
import { useContext } from "react";
import InfoContext from "../store/info-context";

const Modal = (props) => {
  const { title, text, image } = useContext(InfoContext);

  return (
    <div>
      <div className={styles.overlay} onClick={props.onModalHandler}></div>
      <div className={styles.container}>
        <div className={styles.close} onClick={props.onModalHandler}>
          x
        </div>
        <div
          className={styles["left-container"]}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={styles["right-container"]}>
          <div className={styles.heading}>{title}</div>
          <div className={styles.text}>{text}</div>
          <button className={styles.button} onClick={props.onModalHandler}>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
