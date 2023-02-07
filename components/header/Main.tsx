import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="/logo.png" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link legacyBehavior href="/">
          <a className={styles.cart}>
            <FaOpencart />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
