import mongoose, { Schema } from "mongoose";

// mongodb veritbanına bağlan
mongoose.connect("mongodb+srv://admin:admin@notour.ihasugb.mongodb.net/CarDB");

// ayar
mongoose.Promise = global.Promise;

const OrderSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Vehicle",
    },
    money_spend: Number,
    currency: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models?.Order || mongoose.model("Order", OrderSchema);

export default Order;
