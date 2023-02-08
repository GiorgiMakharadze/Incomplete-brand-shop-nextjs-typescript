import styles from "./styles.module.scss";

const Payments = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/payment/visa.webp" alt="visa card" />
        <img src="/mastercard.webp" alt="mastercard card" />
        <img src="/paypal.webp" alt="paypal" />
      </div>
    </div>
  );
};

export default Payments;
