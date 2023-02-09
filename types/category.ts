export default interface CategoryProps {
  header: string;
  products: {
    image: string;
    price?: string;
  }[];
  background: string;
}
