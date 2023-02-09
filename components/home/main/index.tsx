import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <div className={styles.menu}>menu</div>
      <MainSwiper />
      <div className={styles.offers}>offers</div>
      <div className={styles.user}>user</div>
      <div></div>
    </div>
  );
};

export default Main;
