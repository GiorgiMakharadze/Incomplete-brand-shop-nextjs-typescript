import Ad from "./Ad";
import Top from "./Top";
import Main from "./Main";
import LocationProps from "@/types/location";
import styles from "./styles.module.scss";
import session from "redux-persist/lib/storage/session";

const Header = ({ country }: LocationProps) => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
};

export default Header;
