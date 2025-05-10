import mongoose, { Model, Schema } from "mongoose";
import { Role } from "../types/enumTypes";


interface Account extends Document {
  fullName: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
}

const accountSchema: Schema<Account> = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    password:{
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.CUSTOMER,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


export const AccountModel:Model<Account> = (mongoose.models.AccountModel as Model<Account>)||(mongoose.model<Account>("AccountModel",accountSchema))