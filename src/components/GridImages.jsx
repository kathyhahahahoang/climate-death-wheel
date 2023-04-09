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
import InfoContext from "../store/info-context";
import { useState, useContext, useEffect } from "react";

const Options = (props) => {
  const { title, text, image } = useContext(InfoContext);

  const [showTiles, setShowTiles] = useState(false);
  const [showLarge, setShowLarge] = useState(true);
  const [imageId, setImageId] = useState();
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setImageId(image);
    setHeader(title);
    setDescription(text);
  }, [image, title, text]);

  const changeHandler = (event) => {
    setShowLarge(!showLarge);
    setShowTiles(!showTiles);
    const id = event.target.id;
    const image = WheelOptions.wheelOptions[id].image;
    const header = WheelOptions.wheelOptions[id].title;
    const text = WheelOptions.wheelOptions[id].text;
    setImageId(image);
    setHeader(header);
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
        <div className={styles.header}>{header}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles["right-container"]}>
        {/* {showLarge && (
          <div className={styles.close} onClick={largePicChangeHandler}>
            x
          </div>
        )} */}
        {showLarge && (
          <img
            className={styles.largePic}
            onClick={largePicChangeHandler}
            src={imageId}
          ></img>
        )}

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
