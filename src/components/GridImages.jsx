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
          The world’s richest people emit huge and unsustainable amounts of
          carbon and, unlike ordinary people, 50% to 70% of their emissions
          result from their investments. 125 of the world’s richest billionaires
          show that on average they emit 3 million tonnes a year, more than a
          million times the average for someone in the bottom 90% of humanity.
          Billionaires had an average of 14 percent of their investments in
          polluting industries such as fossil fuels and cement, double the
          average for the Standard & Poor 500 group of companies. Billionaires
          hold extensive stakes in many of the world’s largest and most powerful
          corporations, which gives them the power to influence the way these
          companies act. The role of the super-rich in super-charging climate
          change is rarely discussed. This has to change. These billionaire
          investors at the top of the corporate pyramid have huge responsibility
          for driving climate breakdown. They have escaped accountability for
          too long. Governments must hold them to account, legislating to compel
          corporations and investors to reduce carbon emissions, enforcing more
          stringent reporting requirements and imposing new taxation on wealth
          and investments in polluting industries.
        </div>
      </div>
      <div className={styles["right-container"]}>
        {showLarge && (
          <img
            className={styles.largePic}
            onClick={changeHandler}
            src={poorAirQuality}
          ></img>
        )}

        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={heatwave}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={poverty}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={disease}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={drought}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={capitalism}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={permafrost}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={poorAirQuality}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={risingSeaLevels}
            ></img>
          </div>
        )}
        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={superstorm}
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
