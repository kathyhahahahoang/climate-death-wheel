import question from "../img/question.PNG";
import questionSmall from "../img/questionSmall.PNG";
import wheel from "../img/wheel.PNG";
import styles from "./Wheel.module.css";
import Modal from "./Modal";
import { wheelOptions } from "../constants/WheelOptions";
import { useState, useContext, useEffect } from "react";
import InfoContext from "../store/info-context";

const Wheel = ({ resultRef }) => {
  const {
    title,
    setTitle,
    text,
    setText,
    longText,
    setLongText,
    image,
    setImage,
    setIcon,
    setOpenModal,
    setShowTiles,
    setShowLarge,
  } = useContext(InfoContext);

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
          <Modal
            onModalHandler={modalHandler}
            title={title}
            text={text}
            image={image}
            onReadMore={readMoreHandler}
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
        <p className={styles.text}>
          Click on the <br />
          wheel to spin!
        </p>
      </div>
    </div>
  );
};

export default Wheel;
