import {Schema, model, models, InferSchemaType, HydratedDocument} from "mongoose";

const Userschema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      reuired: false,
      default: "",
    },
    provider: {
      type: String,
      default: "credentials",
    },
  },
  { timestamps: true },
);
// Auto-generated TypeScript type from schema
export type UserType = InferSchemaType<typeof Userschema>;

// Full MongoDB document type
export type UserDocument = HydratedDocument<UserType>;

const User = models.User || model<UserType>("User", Userschema);

export default User;