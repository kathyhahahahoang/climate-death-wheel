import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.overlay} onClick={props.onModalHandler}></div>
      <div className={styles.container}>
        <div className={styles.close} onClick={props.onModalHandler}>
          x
        </div>
        <div
          className={styles["left-container"]}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className={styles["right-container"]}>
          <div className={styles.heading}>{props.title}</div>
          <div className={styles.text}>{props.text}</div>
          <button onClick={props.onModalHandler}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
