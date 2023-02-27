import Copyright from "./Copyright";
import Links from "./links";
import NewsLetter from "./NewsLetter";
import Payments from "./Payments";
import Socails from "./Socails";
import LocationProps from "@/types/IndexProps";
import styles from "./styles.module.scss";

const Footer = ({ country }: LocationProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socails />
        <NewsLetter />
        <Payments />
      </div>
    </footer>
  );
};

export default Footer;
