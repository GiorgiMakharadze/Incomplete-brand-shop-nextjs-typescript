import { Types } from "mongoose";

export default interface IndexProps {
  country?: {
    name: string;
    flag: string;
  };
  setActiveImg: any;
  product: {
    name: string;
    description: string;
    brand: string;
    slug: string;
    category: Types.ObjectId;
    subCategories: Types.ObjectId[];
    sku: string;
    priceRange: number;
    priceBefore: number;
    price: number;
    discount: number;
    quantity: number;
    sizes: number | any;
    colors: number | any;

    details: {
      name: string;
      value: string;
    }[];
    questions: {
      question: string;
      answer: string;
    }[];
    reviews: Types.ObjectId[];
    refundPolicy: string;
    rating: number;
    numReviews: number;
    shipping: number;
    subProducts: {
      sku: string;
      images: string[];
      description_images: string[];

      color: {
        color: string;
        image: string;
      };
      sizes: {
        size: string;
        qty: number;
        price: number;
      }[];
      discount: number;
      sold: number;
    }[];
  };
}
