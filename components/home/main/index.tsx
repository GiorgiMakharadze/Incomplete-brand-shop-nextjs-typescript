import Menu from "./Menu";
import Offers from "./offers";
import MainSwiper from "./swiper";
import User from "./User";
import Header from "./Header";
import styles from "./styles.module.scss";
const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
};

export default Main;
