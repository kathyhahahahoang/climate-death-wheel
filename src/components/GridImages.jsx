import styles from "./GridImages.module.css";
import poverty from "../img/poverty.jpg";
import capitalism from "../img/capitalism.jpg";
import disease from "../img/disease.jpg";
import drought from "../img/drought.jpg";
import heatwave from "../img/heat-wave.jpg";
import permafrost from "../img/permafrost.jpg";
import poorAirQuality from "../img/poor-air-quality.jpg";
import risingSeaLevels from "../img/rising-sea-levels.jpg";
import superstorm from "../img/superstorm.jpg";
import WheelOptions from "../constants/WheelOptions";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const Options = () => {
  const [showTiles, setShowTiles] = useState(true);
  const [showLarge, setShowLarge] = useState(false);
  const [imageId, setImageId] = useState();
  const [title, setTitle] = useState("Capitalism");
  const [description, setDescription] = useState(
    "The world’s richest people emit huge and unsustainable amounts of carbon and, unlike ordinary people, 50% to 70% of their emissions result from their investments. 125 of the world’s richest billionaires show that on average they emit 3 million tonnes a year, more than a million times the average for someone in the bottom 90% of humanity. Billionaires hold extensive stakes in many of the world’s largest and most powerful corporations, which gives them the power to influence the way these companies act. The role of the super-rich in super-charging climate change is rarely discussed. These billionaire investors at the top of the corporate pyramid have huge responsibility for driving climate breakdown."
  );

  const changeHandler = (event) => {
    setShowLarge(!showLarge);
    setShowTiles(!showTiles);
    const id = event.target.id;
    const image = WheelOptions.wheelOptions[id].image;
    const header = WheelOptions.wheelOptions[id].title;
    const text = WheelOptions.wheelOptions[id].text;
    setImageId(image);
    setTitle(header);
    setDescription(text);
  };

  const largePicChangeHandler = () => {
    setImageId();
    setShowTiles(true);
    setShowLarge(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <div className={styles.header}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles["right-container"]}>
        {showLarge && (
          <img
            className={styles.largePic}
            onClick={largePicChangeHandler}
            src={imageId}
          ></img>
        )}
        {/* {showLarge && <div className={styles.close}>x</div>} */}

        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={heatwave}
              id="23"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={poverty}
              id="0"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={disease}
              id="30"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={drought}
              id="6"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={capitalism}
              id="3"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={permafrost}
              id="17"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={poorAirQuality}
              id="12"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={risingSeaLevels}
              id="42"
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={superstorm}
              id="36"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
