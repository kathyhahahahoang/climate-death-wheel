import { useContext } from "react";
import styles from "./Form.module.scss";
import InfoContext from "../store/info-context";

const Form = () => {
  const { title } = useContext(InfoContext);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Add your result to the map!</p>
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
  );
};

export default Form;
