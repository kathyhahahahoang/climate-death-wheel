import styles from "./Grid.module.scss";
import capitalismIcon from "../img/capitalism-icon.webp";
import povertyIcon from "../img/poverty-icon.webp";
import poorAirQualityIcon from "../img/poorAirQuality-icon.webp";
import permafrostIcon from "../img/permafrost-icon.webp";
import heatwaveIcon from "../img/heatwave-icon.webp";
import risingSeaLevelsIcon from "../img/risingSeaLevels-icon.webp";
import diseaseIcon from "../img/disease-icon.webp";
import droughtIcon from "../img/drought-icon.webp";
import superstormIcon from "../img/superstorm-icon.webp";
import WheelOptions from "../constants/WheelOptions";
import InfoContext from "../store/info-context";
import { useState, useContext, useEffect } from "react";

const Grid = () => {
  const {
    title,
    longText,
    image,
    openModal,
    setOpenModal,
    showTiles,
    setShowTiles,
    showLarge,
    setShowLarge,
  } = useContext(InfoContext);

  const [imageId, setImageId] = useState();
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setImageId(image);
    setHeader(title);
    setDescription(longText);
  }, [image, title, longText]);

  const changeHandler = (event) => {
    setShowLarge(!showLarge);
    setShowTiles(!showTiles);
    const id = event.target.id;
    const image = WheelOptions.wheelOptions[id].image;
    const header = WheelOptions.wheelOptions[id].title;
    const text = WheelOptions.wheelOptions[id].longText;
    setImageId(image);
    setHeader(header);
    setDescription(text);
  };

  const largePicChangeHandler = () => {
    setShowTiles(!showTiles);
    setShowLarge(!showLarge);
    setOpenModal(false);
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
          {openModal ? (
            <div className={styles.header}>{title}</div>
          ) : (
            <div className={styles.header}>{header}</div>
          )}
          {openModal ? (
            <div className={styles.description}>{longText}</div>
          ) : (
            <div className={styles.description}>{description}</div>
          )}
        </div>
      )}

      {showTiles && (
        <div className={styles["left-container"]}>
          <div className={styles.header}>Wanna learn more?</div>
          <div className={styles.description}>
            Climate change is not a future problem. Changes to Earth’s climate
            driven by increased human emissions of heat-trapping greenhouse
            gases are already having widespread effects on the environment:
            glaciers and ice sheets are shrinking, river and lake ice are
            breaking up earlier, plant and animal geographic ranges are
            shifting, and plants and trees are blooming sooner.
            <br />
            <br />
            Some changes (such as droughts, wildfires, and extreme rainfall) are
            happening faster than scientists previously assessed. According to
            the Intergovernmental Panel on Climate Change (IPCC), modern humans
            have never before seen the observed changes in our global climate,
            and some of these changes are irreversible over the next hundreds to
            thousands of years. Scientists have high confidence that global
            temperatures will continue to rise for many decades, mainly due to
            greenhouse gases produced by human activities.
            <br />
            <br />
            Click on the images to find out more about how climate change is
            affecting us now.
          </div>
        </div>
      )}

      <div className={styles["right-container"]}>
        {/* {showLarge && (
          <div className={styles.largePic}>
            {openModal ? (
              <img
                onClick={largePicChangeHandler}
                src={image}
                alt="Effects of climate change"
              ></img>
            ) : (
              <img
                onClick={largePicChangeHandler}
                src={imageId}
                alt="Effects of climate change"
              ></img>
            )}
          </div>
        )} */}
        {showLarge &&
          (openModal ? (
            <img
              className={styles.largePic}
              onClick={largePicChangeHandler}
              src={image}
              alt="Effects of climate change"
            />
          ) : (
            <img
              className={styles.largePic}
              onClick={largePicChangeHandler}
              src={imageId}
              alt="Effects of climate change"
            />
          ))}
        {showTiles && (
          <img
            src={heatwaveIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="23"
            alt="Burning mountains"
          />
        )}
        {showTiles && (
          <img
            src={povertyIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="0"
            alt="Woman surrounded by plastic garbage"
          />
        )}
        {showTiles && (
          <img
            src={diseaseIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="30"
            alt="Microscopic close-up of disease"
          />
        )}
        {showTiles && (
          <img
            src={droughtIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="6"
            alt="Dried ground"
          />
        )}
        {showTiles && (
          <img
            src={capitalismIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="3"
            alt="Man holding a sign against capitalism at a protest"
          />
        )}
        {showTiles && (
          <img
            src={permafrostIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="17"
            alt="Aerial view of permafrost"
          />
        )}
        {showTiles && (
          <img
            src={poorAirQualityIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="12"
            alt="Factories spewing out smoke"
          />
        )}
        {showTiles && (
          <img
            src={risingSeaLevelsIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="42"
            alt="People walking around their flooded town"
          />
        )}
        {showTiles && (
          <img
            src={superstormIcon}
            className={styles.pic}
            onClick={changeHandler}
            id="36"
            alt="Aftermath of a hurricane"
          />
        )}
      </div>
    </div>
  );
};

export default Grid;
