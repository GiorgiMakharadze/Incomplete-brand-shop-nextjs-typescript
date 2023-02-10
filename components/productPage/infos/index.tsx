import { useState } from "react";
import IndexProps from "@/types/IndexProps";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Link from "next/link";

const Infos = ({ product }: IndexProps) => {
  const router = useRouter();
  const [size, setSize] = useState(router.query.size);

  return (
    <div className={styles.infos}>
      <div className={styles.infos__container}>
        <h1 className={styles.infos__name}>{product.name}</h1>
        <h1 className={styles.infos__sku}>{product.sku}</h1>
        <div className={styles.infos__rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={1}
            readOnly
            style={{ color: "#FACF19" }}
          />
          {product.numReviews}
          {product.numReviews == 1 ? "review" : "reviews"}
        </div>
        <div className={styles.infos__price}>
          {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}</h1>}
          {product.discount > 0 ? (
            <h3>
              <span>{product.priceBefore}*</span>
              <span>(-{product.discount}$)</span>
            </h3>
          ) : (
            ""
          )}
        </div>
        <span className={styles.infos__shipping}>
          {product.shipping
            ? `+${product.shipping}$ Shipping fee`
            : "Free Shipping"}
        </span>
        <span>
          {!size
            ? product.quantity
            : product.sizes.reduce(
                (start: number, next: { size: string; qty: number }) =>
                  start + next.qty,
                0
              )}{" "}
          pieces avaliable
        </span>
        <div className={styles.infos__sizes}>
          <h4>Select a Size: </h4>
          <div className={styles.infos__sizes_wrap}>
            {product.sizes.map((size: string | any, i: any) => (
              <Link
                href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
              >
                <div
                  className={`${styles.infos__sizes_size} ${
                    i == router.query.size && styles.active_size
                  }`}
                  onClick={() => setSize(size.size)}
                >
                  {size.size}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
