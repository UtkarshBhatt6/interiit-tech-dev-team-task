import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema(
  {
    email_address: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("subscription", subscriptionSchema);

export default Subscription;