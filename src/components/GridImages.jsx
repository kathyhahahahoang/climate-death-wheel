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
  const [readMore, setReadMore] = useState(false);

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
    setReadMore(true);
  };

  return (
    <div className={styles.container}>
      {showLarge && (
        <div className={styles.close} onClick={largePicChangeHandler}>
          x
        </div>
      )}
      {showLarge && (
        <div className={styles["left-container"]}>
          <div className={styles.header}>{header}</div>
          <div className={styles.description}>{description}</div>
        </div>
      )}
      {readMore && showTiles && (
        <div className={styles["left-container"]}>
          <div className={styles.header}>Wanna learn more?</div>
          <div className={styles.description}>
            Global climate change is not a future problem. Changes to Earth’s
            climate driven by increased human emissions of heat-trapping
            greenhouse gases are already having widespread effects on the
            environment: glaciers and ice sheets are shrinking, river and lake
            ice is breaking up earlier, plant and animal geographic ranges are
            shifting, and plants and trees are blooming sooner. Effects that
            scientists had long predicted would result from global climate
            change are now occurring, such as sea ice loss, accelerated sea
            level rise, and longer, more intense heat waves. <br />
            <br />
            Some changes (such as droughts, wildfires, and extreme rainfall) are
            happening faster than scientists previously assessed. In fact,
            according to the Intergovernmental Panel on Climate Change (IPCC),
            modern humans have never before seen the observed changes in our
            global climate, and some of these changes are irreversible over the
            next hundreds to thousands of years. Scientists have high confidence
            that global temperatures will continue to rise for many decades,
            mainly due to greenhouse gases produced by human activities.
            <br />
            <br />
            Click on the images to the right to find out more about how climate
            change is affecting us now.
          </div>
        </div>
      )}
      <div className={styles["right-container"]}>
        {showLarge && (
          <img
            className={styles.largePic}
            onClick={largePicChangeHandler}
            src={imageId}
            alt="Effects of climate change"
          ></img>
        )}

        {showTiles && (
          <div className={styles["pic-container"]}>
            <img
              className={styles.pic}
              onClick={changeHandler}
              src={heatwave}
              id="23"
              alt="Burning mountains"
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
              alt="Women surrounded by plastic garbage"
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
              alt="Microscopic close-up of disease"
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
              alt="Dried ground"
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
              alt="Man holding a sign against capitalism at a protest"
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
              alt="Aerial view of permafrost"
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
              alt="Factories spewing out smoke"
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
              alt="People walking around their flooded town"
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
              alt="Aftermath of a hurricane"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
