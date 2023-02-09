import axios from "axios";
import { useSession } from "next-auth/react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LocationProps from "@/types/location";
import styles from "../styles/Home.module.scss";
import Main from "../components/home/main";
import FlashDeals from "@/components/home/main/flashDealds";
import Category from "@/components/home/category";
import { women_accessories, women_dresses, women_shoes } from "@/data/home";

export default function Home({ country }: LocationProps) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
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
        </div>
      </div>
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    // https://api.ipregistry.co/?key=plih250x8rnvtpmw
    .get("")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      //country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Georgia",
        flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/georgia-162300_960_720.png",
      },
    },
  };
}
