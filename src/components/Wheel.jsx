import question from "../img/question.PNG";
import questionSmall from "../img/questionSmall.PNG";
import wheel from "../img/wheel.PNG";
import styles from "./Wheel.module.css";
import { useState } from "react";
import Modal from "./Modal";
import { wheelOptions } from "../constants/WheelOptions";

const Wheel = () => {
  const [spin, setSpin] = useState(false);
  const [deg, setDeg] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let zoneSize = 7.5;

  const spinHandler = () => {
    setDeg(Math.floor(5000 + Math.random() * 10000));
    setSpin(true);
    setButtonDisable(true);

    openModal();
  };

  const actualDeg = deg % 360;
  const winningNumber = Math.ceil(actualDeg / zoneSize);
  const winner = wheelOptions[winningNumber - 1];
  console.log(actualDeg, deg, winningNumber, winner);

  const openModal = () => {
    const timer = setTimeout(() => {
      setShowModal(true);
      console.log("pop up");
    }, 13000);
    return () => clearTimeout(timer);
  };

  const modalHandler = () => {
    setShowModal(false);
  };

  const spinWheel = {
    transform: spin ? `rotate(${deg}deg)` : "",
    transition: spin ? "all 10s ease-out" : "",
    pointerEvents: buttonDisable ? "none" : "auto",
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {showModal && (
          <Modal
            onModalHandler={modalHandler}
            title={wheelOptions[winningNumber - 1].title}
            text={wheelOptions[winningNumber - 1].text}
            image={wheelOptions[winningNumber - 1].image}
          />
        )}

        <img
          className={styles.question}
          srcSet={` ${questionSmall} 768w, ${question} 1280w`}
          alt="What will be your cause of death text"
        ></img>
        <img
          className={styles.wheel}
          src={wheel}
          alt="roulette wheel"
          onClick={spinHandler}
          style={spinWheel}
        ></img>
      </div>
    </div>
  );
};

export default Wheel;
