import axios from "axios";
import { useSession } from "next-auth/react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "../styles/Home.module.scss";
import Main from "../components/home/main";
import FlashDeals from "@/components/home/main/flashDealds";
import Category from "@/components/home/category";
import db from "@/utils/db";
import Product from "@/models/Products";

import {
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "@/data/home";
import ProductsSwiper from "@/components/productsSwiper";
import ProductCard from "@/components/productCard";
export default function home({ country, products }) {
  const { data: session } = useSession();

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />

            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />

            <Category
              header="Accessories"
              products={women_accessories}
              background="#000"
            />
          </div>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
          <ProductsSwiper products={women_swiper} />
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let data = await axios
    .get("https://api.ipregistry.co/?key=plih250x8rnvtpmw")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
