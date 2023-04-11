import { useContext } from "react";
import styles from "./Video.module.css";
import video from "../img/video.MP4";
import kathy from "../img/kathy.jpg";
import InfoContext from "../store/info-context";

const Video = () => {
  const { title } = useContext(InfoContext);

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <p className={styles.text}>See the sign in action!</p>
        <img className={styles.img} src={kathy} />
        <video
          className={styles.video}
          src={video}
          width="300"
          height="540"
          controls="controls"
          autoPlay={false}
        />
      </div>
      <div className={styles["right-container"]}>
        <p className={styles.heading}>And add your result to the map below!</p>
        <form className={styles["form-container"]}>
          <div className={styles["label-container"]}>
            <label className={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Kathy"
              className={styles.input}
            />
          </div>
          <div className={styles["label-container"]}>
            <label className={styles.label}>Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Los Angeles"
              className={styles.input}
            />
          </div>
          <div className={styles["label-container"]}>
            <label className={styles.label}>Cause of death:</label>
            <input
              type="text"
              name="death"
              value={title}
              className={styles.input}
              readOnly={true}
            />
          </div>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Video;
