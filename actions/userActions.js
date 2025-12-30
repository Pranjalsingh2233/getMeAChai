"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentForm) => {
  await connectDB();
  //fetch user razorpay id and secret
  const user = await User.findOne({ username: to_username });
  const rzpId = user.razorpayId;
  const rzpSecret = user.razorpaySecret;

  var instance = new Razorpay({
    key_id: rzpId,
    key_secret: rzpSecret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);
  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentForm.name,
    message: paymentForm.message,
  });
  return x;
};

export const fetchUsers = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username }).lean();
  return u;
};

export const fetchPayments = async (username) => {
  await connectDB();
  let payments = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  let totalPayments = await Payment.countDocuments({
    to_user: username,
    done: true,
  });
  return { payments, totalPayments };
};

export const updateProfile = async (data, oldUsername) => {
  await connectDB();
  let nData = Object.fromEntries(data);
  if (nData.username !== oldUsername) {
    let u = await User.findOne({ username: nData.username });
    if (u) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: nData.email }, nData);
    //update all payments to new username
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: nData.username }
    );
  } else {
    await User.updateOne({ email: nData.email }, nData);
  }
};
