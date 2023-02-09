import styles from "./styles.module.scss";
import { DotLoader } from "react-spinners";
interface DotloaderProps {
  loading: boolean;
}

const Dotloader = ({ loading }: DotloaderProps) => {
  return (
    <div className={styles.loader}>
      <DotLoader color="#2f82ff" loading={loading} />
    </div>
  );
};

export default Dotloader;
