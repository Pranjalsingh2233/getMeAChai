import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profilePic: { type: String },
    coverPic: { type: String },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || model("User", userSchema);
