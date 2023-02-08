import jwt from "jsonwebtoken";
import { ActivationPayloadProps } from "@/types/tokensjwt";
const secret = process.env.ACTIVATION_TOKEN_SECRET || "mysecret";

export const createActivationToken = (payload: ActivationPayloadProps) => {
  return jwt.sign(payload, secret || "mysecret", {
    expiresIn: "2d",
  });
};
