import styles from "./Options.module.css";
import poverty from "../img/poverty.jpg";
import capitalism from "../img/capitalism.jpg";
import disease from "../img/disease.jpg";
import drought from "../img/drought.jpg";
import heatwave from "../img/heat-wave.jpg";
import permafrost from "../img/permafrost.jpg";
import poorAirQuality from "../img/poor-air-quality.jpg";
import risingSeaLevels from "../img/rising-sea-levels.jpg";
import superstorm from "../img/superstorm.jpg";
import { useState } from "react";

const Options = () => {
  const [showTiles, setShowTiles] = useState(true);
  const [showLarge, setShowLarge] = useState(false);

  const changeHandler = () => {
    setShowLarge(!showLarge);
    setShowTiles(!showTiles);
  };

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <div className={styles.header}>Capitalism</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime
          ducimus quisquam minus delectus necessitatibus ipsa error fugit
          veniam, tempore molestiae commodi magni natus nihil earum quaerat quo,
          minima saepe.
        </div>
      </div>
      <div className={styles["right-container"]}>
        {showLarge && (
          <img
            className={styles.largePic}
            onClick={changeHandler}
            src={superstorm}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={heatwave}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={poverty}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={disease}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={drought}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={capitalism}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={permafrost}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={poorAirQuality}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={risingSeaLevels}
          ></img>
        )}
        {showTiles && (
          <img
            className={styles.pic}
            onClick={changeHandler}
            src={superstorm}
          ></img>
        )}
      </div>
    </div>
  );
};

export default Options;
