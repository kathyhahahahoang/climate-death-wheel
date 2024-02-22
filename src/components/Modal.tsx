import styles from "./Modal.module.scss";
import modal from "../assets/img/modal.webp";
import { useInfoContext } from "../store/info-context.tsx";

type ModalProps = {
  onModalHandler: () => void;
  onReadMore: (e: MouseEvent) => void;
};

const Modal = ({ onModalHandler, onReadMore }: ModalProps) => {
  const { title, text, image } = useInfoContext();

  return (
    <div>
      <div className={styles.overlay} onClick={onModalHandler}></div>

      <div
        className={styles.container}
        style={{ backgroundImage: `url(${modal})` }}
      >
        <div className={styles.close} onClick={onModalHandler}>
          <span>x</span>
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
