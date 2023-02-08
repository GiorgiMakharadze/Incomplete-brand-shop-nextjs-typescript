import Link from "next/dist/client/link";
import { IoLocationSharp } from "react-icons/io5";
import styles from "./styles.module.scss";

const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <section>2022 SHOPPAY All Rights Reserved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> Gerogia
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
