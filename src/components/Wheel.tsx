import styles from "./Wheel.module.scss";
import Modal from "./Modal.tsx";
import questionLandsape from "../img/question-landscape.PNG";
import questionPortrait from "../img/question-portrait.PNG";
import wheel from "../img/wheel.webp";
import wheelMobile from "../img/wheel-mobile.webp";
import { wheelOptions } from "../constants/WheelOptions.tsx";
import React, { useState, useEffect } from "react";
import { useInfoContext } from "../store/info-context.tsx";

const Wheel = ({ resultRef }) => {
  const {
    setTitle,
    setText,
    setLongText,
    setImage,
    setIcon,
    setOpenModal,
    setShowTiles,
    setShowLarge,
  } = useInfoContext();

  const [spin, setSpin] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deg, setDeg] = useState(0);
  const [winner, setWinner] = useState({});

  useEffect(() => {
    setDeg(Math.floor(5000 + Math.random() * 10000));
  }, []);

  useEffect(() => {
    const zoneSize = 7.5;
    const actualDeg = deg % 360;
    const winningNumber = Math.ceil(actualDeg / zoneSize);
    setWinner(wheelOptions[winningNumber - 1]);
  }, [deg]);

  useEffect(() => {
    if (winner) {
      const {
        title: header,
        text: description,
        longText: longDescription,
        image: pic,
        icon,
      } = winner;
      setTitle(header);
      setText(description);
      setLongText(longDescription);
      setImage(pic);
      setIcon(icon);
    }
  }, [winner]);

  const spinHandler = () => {
    setSpin(true);
    setButtonDisable(true);
    openModal();
    setOpenModal(true);
    setShowTiles(false);
    setShowLarge(true);
  };

  const openModal = () => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 7000);
    return () => clearTimeout(timer);
  };

  const modalHandler = () => {
    setShowModal(false);
  };

  const readMoreHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const spinWheel = {
    transform: spin ? `rotate(${deg}deg)` : "",
    transition: spin ? "all 5s ease-out" : "",
    pointerEvents: buttonDisable ? "none" : "auto",
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {showModal && (
          <Modal onModalHandler={modalHandler} onReadMore={readMoreHandler} />
        )}
        <picture className={styles["question-container"]}>
          <source
            className={styles.question}
            media="(orientation: portrait)"
            srcSet={questionPortrait}
          />

          <source className={styles.question} srcSet={questionLandsape} />
          <img
            className={styles.question}
            src={questionLandsape}
            alt="What will be your cause of death text"
          />
        </picture>
        <picture className={styles["wheel-container"]}>
          <source
            className={styles.wheel}
            media="(orientation: portrait)"
            srcSet={wheelMobile}
          />
          <source
            className={styles.wheel}
            media="(orientation: landscape)"
            srcSet={wheel}
          />
          <img
            className={styles.wheel}
            src={wheel}
            alt="roulette wheel"
            onClick={spinHandler}
            style={spinWheel}
          />
        </picture>
        <div className={styles.text}>
          <p>
            Click on the <br />
            wheel to spin!
          </p>
          <p className={styles.small}>(Good luck!)</p>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
