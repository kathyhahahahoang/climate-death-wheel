import question from "../img/question.PNG";
import questionSmall from "../img/questionSmall.PNG";
import wheel from "../img/wheel.PNG";
import styles from "./Wheel.module.css";
import Modal from "./Modal";
import { wheelOptions } from "../constants/WheelOptions";
import { useState, useContext, useEffect } from "react";
import InfoContext from "../store/info-context";

const Wheel = () => {
  const { title, setTitle, text, setText, image, setImage } =
    useContext(InfoContext);

  const [spin, setSpin] = useState(false);
  const [deg, setDeg] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState({});
  const { title: header, text: description, image: pic } = winner;

  useEffect(() => {
    setDeg(Math.floor(5000 + Math.random() * 10000));
  }, []);

  const spinHandler = () => {
    setSpin(true);
    setButtonDisable(true);
    const zoneSize = 7.5;
    const actualDeg = deg % 360;
    const winningNumber = Math.ceil(actualDeg / zoneSize);
    setWinner(wheelOptions[winningNumber - 1]);
    openModal();
  };

  console.log("1:" + " " + deg, winner.title);
  console.log("2:" + " " + header, text, image);

  useEffect(() => {
    if (winner) {
      setTitle(header);
      setText(description);
      setImage(pic);
    }
  }, [winner]);

  const openModal = () => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 11000);
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
            title={title}
            text={text}
            image={pic}
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
