import { Schema, model, models, Types } from "mongoose";

const { ObjectId } = Types || Schema;

const subSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "must be atleast 2 charcters"],
    maxlength: [32, "must be below 32 charcters"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  parent: {
    type: ObjectId,
    ref: "Category",
    required: true,
  },
});

const SubCategory = models.SubCategory || model("SubCategory", subSchema);

export default SubCategory;
