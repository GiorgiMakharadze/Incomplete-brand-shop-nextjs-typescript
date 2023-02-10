import { useEffect, useState } from "react";
import IndexProps from "@/types/IndexProps";
import styles from "./styles.module.scss";

const ProductCard = ({ product }: IndexProps) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState<number | any>(
    product.subProducts[active]?.sizes.map((s) => {
      return s.price;
    })
  ).sort((a, b) => a - b);
  const [styles, setStyles] = useState(
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

  return <div>ProductCart</div>;
};

export default ProductCard;
