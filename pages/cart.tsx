import styles from "../styles/cart.module.scss";

import Header from "@/components/cart/header";
import Empty from "@/components/cart/header/empty";
const Cart = () => {
  const cart = [];
  return (
    <>
      <Header />
      <div className={styles.cart}>
        {cart.length > 1 ? (
          <div className={styles.cart_container}></div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default Cart;
