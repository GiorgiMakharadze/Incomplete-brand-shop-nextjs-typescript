import Ad from "./Ad";
import Top from "./Top";
import styles from "./styles.module.scss";
import Main from "./Main";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </header>
  );
};

export default Header;
