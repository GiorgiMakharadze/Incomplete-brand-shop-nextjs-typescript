import axios from "axios";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LocationProps from "@/types/location";

export default function Home({ country }: LocationProps) {
  console.log(country);
  return (
    <div>
      <Header country={country} />
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
        name: "Morroco",
        flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/georgia-162300_960_720.png",
      },
    },
  };
}
