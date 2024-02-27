import styles from "./GridImages.module.scss";
import poverty from "../assets/img/poverty.webp";
import capitalism from "../assets/img/capitalism.webp";
import disease from "../assets/img/disease.webp";
import drought from "../assets/img/drought.webp";
import heatwave from "../assets/img/heatwave.webp";
import permafrost from "../assets/img/permafrost.webp";
import poorAirQuality from "../assets/img/poorAirQuality.webp";
import risingSeaLevels from "../assets/img/risingSeaLevels.webp";
import superstorm from "../assets/img/superstorm.webp";
import { wheelOptions } from "../constants/WheelOptions.tsx";
import { useInfoContext } from "../store/info-context.tsx";
import { useState, useEffect, MouseEvent } from "react";

type iconType = {
  src: string;
  id: number;
  alt: string;
};

const iconArray: iconType[] = [
  {
    src: heatwave,
    id: 23,
    alt: "Burning mountains",
  },
  {
    src: poverty,
    id: 0,
    alt: "Women surrounded by plastic garbage",
  },
  {
    src: disease,
    id: 30,
    alt: "Microscopic close-up of disease",
  },
  {
    src: drought,
    id: 6,
    alt: "Dried ground",
  },
  {
    src: capitalism,
    id: 3,
    alt: "Man holding a sign against capitalism at a protest",
  },
  {
    src: permafrost,
    id: 17,
    alt: "Aerial view of permafrost",
  },
  {
    src: poorAirQuality,
    id: 12,
    alt: "Factories spewing out smoke",
  },
  {
    src: risingSeaLevels,
    id: 42,
    alt: "People walking around their flooded town",
  },
  {
    src: superstorm,
    id: 36,
    alt: "Aftermath of a hurricane",
  },
];

const GridImages = () => {
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
  } = useInfoContext();

  const [imageId, setImageId] = useState<string | undefined>();
  const [header, setHeader] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");

  useEffect(() => {
    setImageId(image);
    setHeader(title);
    setDescription(longText);
  }, [image, title, longText]);

  const changeHandler = (event: MouseEvent<HTMLImageElement>) => {
    setShowLarge(!showLarge);
    setShowTiles(!showTiles);
    const id = +event.currentTarget.id;
    const image = wheelOptions[id].image;
    const header = wheelOptions[id].title;
    const text = wheelOptions[id].longText;
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
          <span>x</span>
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
        {showLarge && (
          <div className={styles.largePic}>
            {openModal ? (
              <img
                onClick={largePicChangeHandler}
                src={image}
                alt="Effects of climate change"
              />
            ) : (
              <img
                onClick={largePicChangeHandler}
                src={imageId}
                alt="Effects of climate change"
              />
            )}
          </div>
        )}

        {iconArray.map((el: iconType) => {
          return (
            showTiles && (
              <div className={styles["pic-container"]} key={el.id}>
                <img
                  className={styles.pic}
                  onClick={changeHandler}
                  src={el.src}
                  id={el.id.toString()}
                  alt={el.alt}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default GridImages;
