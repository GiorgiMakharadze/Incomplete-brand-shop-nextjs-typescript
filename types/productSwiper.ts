export default interface ProductSwiperProps {
  header: string;
  products: {
    name: string;
    image: string;
    price?: string;
  }[];
  bg: string;
}
