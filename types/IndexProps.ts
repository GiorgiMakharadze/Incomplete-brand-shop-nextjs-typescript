import { Types } from "mongoose";

export default interface IndexProps {
  country?: {
    name: string;
    flag: string;
  };
  product: {
    name: string;
    description: string;
    brand: string;
    slug: string;
    category: Types.ObjectId;
    subCategories: Types.ObjectId[];
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
