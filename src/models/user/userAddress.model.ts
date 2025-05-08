import { IndianState } from "@/src/types/enumTypes";
import mongoose, { Model, Schema } from "mongoose";


interface Address {
  pincode: string;
  streetAddress:string;
  city: string;
  state: string;
  contactNO: string;
  userId: mongoose.Schema.Types.ObjectId;
}

const addressSchema: Schema<Address> = new Schema(
  {
    streetAddress: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    pincode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    
    state: {
      type: String,
      enum: Object.values(IndianState),
      required: true,
    },
    contactNO: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserAddressModel: Model<Address> =
  (mongoose.models.UserAddressModel as Model<Address>) ||
  mongoose.model<Address>("UserAddressModel", addressSchema);
