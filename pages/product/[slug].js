import db from "@/utils/db";
import Product from "@/models/Products";
import styles from "../../styles/product.module.scss";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "../../components/footer";

const product = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product);
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header country="" />
      <div className={styles.product__container}>
        <div className={styles.path}>
          Home / {product.category.toString()}
          {product.subCategories.map((sub) => (
            <span>/{sub.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default product;

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();

  let product = await Product.findOne({ slug }).lean();
  if (!product) {
    console.error(`Product with slug "${slug}" not found.`);
    return {
      props: {},
    };
  }
  let subProduct = product.subProducts[style];
  if (!subProduct) {
    console.error(`Subproduct with style "${style}" not found.`);
    return {
      props: {},
    };
  }
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => a - b);

  console.log(product);

  let newProduct = {
    ...product,
    images: subProduct.image,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),

    priceRange: subProduct.discount
      ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}$`
      : `From ${prices[0]} to ${prices[prices.length - 1]}$`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };
  console.log("new product", newProduct);
  db.disconnectDb();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
