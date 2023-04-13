import styles from "./Quote1.module.css";
import { forwardRef } from "react";

const Quote1 = forwardRef((props, ref) => {
  return (
    <p className={styles.quote} ref={ref}>
      It is unequivocal that human influence has warmed the atmosphere, ocean,
      and land.
    </p>
  );
});

export default Quote1;
