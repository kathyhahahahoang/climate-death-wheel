import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <span className={styles.copyright}>&copy;</span>
      <p>Kathy Hoang {year}</p>
    </div>
  );
};

export default Footer;
