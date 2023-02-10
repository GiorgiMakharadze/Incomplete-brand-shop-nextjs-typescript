import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Rating from "@mui/material/Rating";
import IndexProps from "@/types/IndexProps";
import Share from "../share";
import Accordion from "../Accordion";
import { TbMinus, TbPlus } from "react-icons/tb";
import { BsHandbagFill, BsHeart } from "react-icons/bs";
import styles from "./styles.module.scss";

const Infos = ({ product, setActiveImg }: IndexProps) => {
  const router = useRouter();
  const [size, setSize] = useState(router.query.size);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSize("");
    setQty(1);
  }, [router.query.style]);
  useEffect(() => {
    if (qty > product.quantity) {
      setQty(product.quantity);
    }
  }, [router.query.style]);

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
          ({product.numReviews}
          {product.numReviews == 1 ? "review" : " reviews"})
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
          {size
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
        <div className={styles.infos__colors}>
          {product.colors &&
            product.colors.map((color: string, i: number | string) => (
              <span
                className={`${
                  i == router.query.style ? styles.active_color : ""
                }`}
                onMouseOver={() =>
                  setActiveImg(product.subProducts[i].images[0].url)
                }
                onMouseLeave={() => setActiveImg("")}
              >
                <Link href={`/product/${product.slug}?style=${i}`}>
                  <img src={color.image} alt={product.name} />
                </Link>
              </span>
            ))}
        </div>
        <div className={styles.infos__qty}>
          <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
            <TbMinus />
          </button>
          <span>{qty}</span>
          <button
            onClick={() => qty < product.quantity && setQty((prev) => prev + 1)}
          >
            <TbPlus />
          </button>
        </div>
        <div className={styles.infos__actions}>
          <button
            disabled={product.quantity < 1}
            style={{
              cursor: `${product.quantity < 1 ? "not-allowed" : ""}`,
            }}
          >
            <BsHandbagFill />
            <b>ADD TO CART</b>
          </button>
          <button>
            <BsHeart />
            WISHLIST
          </button>
        </div>
        <Share />
        <Accordion details={[product.description, ...product.details]} />
      </div>
    </div>
  );
};

export default Infos;
