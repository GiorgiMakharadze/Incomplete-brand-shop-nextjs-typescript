import Menu from "./Menu";
import Offers from "./offers";
import MainSwiper from "./swiper";

import styles from "./styles.module.scss";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <div className={styles.user}>user</div>
    </div>
  );
};

export default Main;
