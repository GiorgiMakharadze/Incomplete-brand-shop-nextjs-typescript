import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import styles from "./styles.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <Link href="/">
            <img src="../../../logo.png" />
          </Link>
        </div>
        <div className={styles.header__right}>
          <Link href="">
            <span>
              Continue shopping
              <MdPlayArrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
