import Link from "next/dist/client/link";
import { IoLocationSharp } from "react-icons/io5";
import LocationProps from "@/types/location";
import styles from "./styles.module.scss";

const Copyright = ({ country }: LocationProps) => {
  return (
    <div className={styles.footer__copyright}>
      <section>2022 SHOPPAY All Rights Reserved.</section>
      <section>
        <ul>
          {data.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> {country?.name}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
const data = [
  {
    name: "Privacy Center",
    link: "",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    name: "Manage Cookies",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Copyright Notice",
    link: "",
  },
];

export default Copyright;
