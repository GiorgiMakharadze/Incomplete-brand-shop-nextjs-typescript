import Link from "next/link";
import styles from "./styles.module.scss";

const Empty = () => {
  return (
    <div className={styles.empty}>
      <img src="../../../images/empty.png" alt="" />
      <h1>Cart is empty</h1>

      <Link href="/" legacyBehavior>
        <a>
          <button className={`${styles.empty__btn} ${styles.empty__btn_v2}`}>
            SHOP NOW
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Empty;
