import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export default async function Username({ params }) {
  const { username } = await params;

  //check if user exists
  await connectDB();
  let u = await User.findOne({ username });
  if (!u) {
    return notFound();
  }
  return <PaymentPage username={username} />;
}
