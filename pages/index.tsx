import axios from "axios";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LocationProps from "@/types/location";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }: LocationProps) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header country={country} />
      {session ? "you are logged in " : "your not logged in"}
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
