import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import UserMenu from "./UserMenu";

const Top = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/14/15/georgia-162300_960_720.png"
              alt=""
            />
            <span>Georgia / usd</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer proteciton</span>
          </li>
          <li className={styles.li}>
            <span>Costumer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/Whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/14/15/georgia-162300_960_720.png"
                    alt=""
                  />
                  <span>Giorgi</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
                {visible && <UserMenu loggedIn={loggedIn} />}
              </li>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
