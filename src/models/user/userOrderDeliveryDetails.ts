export interface Order extends Document {
    orderId: string;
    orderStatus: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
    shippingAddress: mongoose.Schema.Types.ObjectId;
    deliveryDate?: Date;
    deliveryType: "REGULAR"|'EARLY'
    trackingId?: string;
    createdAt: Date;
    updatedAt: Date;
  }
import mongoose, { Model, Schema } from "mongoose";

const orderSchema = new Schema<Order>(
    {
      orderId: {
        type: String,
        required: true,
        unique: true,
      },
      orderStatus: {
        type: String,
        enum: ["PENDING", "SHIPPED", "DELIVERED", "CANCELLED"],
        default: "PENDING",
        required: true,
      },
      paymentStatus: {
        type: String,
        enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
        default: "PENDING",
        required: true,
      },
      shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserAddressModel",
        required: true,
      },
      deliveryDate: {
        type: Date,
      },
      trackingId: {
        type: String,
      },
    },
    { timestamps: true }
  );
  
  // Export the model
  export const OrderDelivery: Model<Order> =
    mongoose.models.OrderDelivery || mongoose.model<Order>("OrderDelivery", orderSchema);
  