import styles from "./Video.module.css";
import video from "../img/video.MP4";

const Video = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>See the sign in action!</p>
      <video
        className={styles.video}
        src={video}
        width="300"
        height="600"
        controls="controls"
        autoPlay={false}
      />
    </div>
  );
};

export default Video;
