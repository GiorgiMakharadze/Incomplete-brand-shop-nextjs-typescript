import Copyright from "./Copyright";
import Links from "./links";
import NewsLetter from "./NewsLetter";
import Payments from "./Payments";
import Socails from "./Socails";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socails />
        <NewsLetter />
        <Payments />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
