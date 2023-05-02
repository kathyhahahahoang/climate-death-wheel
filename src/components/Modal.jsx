import styles from "./Modal.module.scss";
import { useContext } from "react";
import modal from "../img/modal.webp";
import modalSmall from "../img/modal-mobile.webp";

import InfoContext from "../store/info-context";

const Modal = (props) => {
  const { title, text, image } = useContext(InfoContext);

  return (
    <div>
      <div className={styles.overlay} onClick={props.onModalHandler}></div>

      <div className={styles.container}>
        <picture>
          <source
            media="(orientation: portrait)"
            srcSet={modalSmall}
            alt="Cardboard background"
          />
          <source
            media="(orientation: landscape)"
            srcSet={modal}
            alt="Cardboard background"
          />

          <img
            className={styles.background}
            src={Modal}
            alt="Cardboard background"
          />
        </picture>

        {/* <div
          className={styles.background}
          style={{ backgroundImage: `url(${modal})` }}
        /> */}
        {/* <div className={styles.hidden}>
          <img src={modal} />
          <img src={modalSmall} />
        </div> */}
        {/* <img
          srcSet={`${modalSmall} 750w, ${modal} 1000w`}
          src="={modal}"
          className={styles.background}
        /> */}
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
          <button className={styles.button} onClick={props.onReadMore}>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
