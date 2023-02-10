import { useEffect, useState } from "react";
import Link from "next/link";
import IndexProps from "@/types/IndexProps";
import styles from "./styles.module.scss";
import ProductSwiper from "./ProductSwiper";

const ProductCard = ({ product }: IndexProps) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState<number | any>(
    product.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [styless, setStyless] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );

  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes.map((s) => {
        return s.price;
      })
    );
  }, [active]);

  console.log(images, prices, styles);

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <Link href={`/product/${product.slug}?styles=${active}`}>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
