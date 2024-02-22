import styles from "./Quote.module.scss";
import { forwardRef } from "react";

const Quote = forwardRef<HTMLParagraphElement>((_, ref) => {
  return (
    <p className={styles.quote} ref={ref}>
      It is unequivocal that human influence has warmed the atmosphere, ocean,
      and land.
    </p>
  );
});

export default Quote;
