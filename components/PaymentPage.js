"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchUsers, fetchPayments, initiate } from "@/actions/userActions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

export default function PaymentPage({ username }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { data: session } = useSession();
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState({});

  const handleChange = (e) => {
    setPaymentForm({
      ...paymentForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Thanks For Your Donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const getData = async () => {
    let u = await fetchUsers(username);
    setCurrentUser(u);
    let dbPayments = await fetchPayments(username);
    setPayments(dbPayments);
  };

  const pay = async (amount) => {
    //get the order id
    let a = await initiate(amount, username, paymentForm);
    let orderId = a.id;
    var options = {
      key: currentUser?.razorpayId, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src={currentUser.coverPic}
          alt="cover"
        />
        <div className="absolute -bottom-14 right-[50%] translate-x-[50%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src={currentUser.profilePic}
            alt="profile"
          />
        </div>
      </div>
      <div className="info text-center my-16 space-y-2 max-w-2xl mx-auto">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">
          Let's help {username} get a chai ☕
        </div>
        <div className="text-slate-400">
          {payments.length > 0
            ? `${payments.length} payments`
            : "No payments yet"}{" "}
          &bull;&nbsp; ₹
          {payments.length > 0
            ? payments.reduce((acc, p) => acc + parseInt(p.amount), 0)
            : 0}{" "}
          raised
        </div>
      </div>
      <div className="payment flex flex-wrap justify-center gap- mb-20">
        <div className="supporters w-1/2 bg-slate-900 p-10 rounded-lg text-white ">
          {/* show all list of supporters as a leaderboard */}
          <h2 className="font-bold text-2xl mb-5">Supporters</h2>
          <ul className="mx-5 text-lg">
            {payments.length > 0 ? (
              payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-2 items-center">
                  <img src="avatar.gif" alt="user" width={33} />
                  <span>
                    {p.name} donated{" "}
                    <span className="font-bold">₹{p.amount}</span> with a
                    message "{p.message}"
                  </span>
                </li>
              ))
            ) : (
              <li>No supporters yet. Be the first one!</li>
            )}
          </ul>
        </div>
        <div className="makePayments w-1/2 bg-slate-900 p-10 rounded-lg text-white ">
          <h2 className="font-bold text-2xl mb-5">Make a Payment</h2>
          {/* input for name and message */}
          <div className="mb-2">
            <input
              onChange={handleChange}
              value={paymentForm.name}
              name="name"
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800 mb-3"
              placeholder="Enter your name"
            />
            <textarea
              onChange={handleChange}
              value={paymentForm.message}
              name="message"
              className="w-full p-3 rounded-lg bg-slate-800"
              rows={4}
              placeholder="Enter a message (optional)"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <input
              onChange={handleChange}
              value={paymentForm.amount}
              name="amount"
              type="number"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />
            <button
              onClick={() => pay(paymentForm.amount * 100)}
              className="bg-blue-700 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-blue-800 disabled:bg-slate-800 disabled:cursor-not-allowed"
              disabled={
                paymentForm.name.length < 3 ||
                paymentForm.message.length < 4 ||
                paymentForm.amount < 1
              }
            >
              Pay
            </button>
          </div>
          {/* or choose from these amounts */}
          <div className="flex gap-3 mt-5">
            <button
              className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700 disabled:cursor-not-allowed"
              onClick={() => pay(1000)}
              disabled={
                paymentForm.name.length < 3 || paymentForm.message.length < 4
              }
            >
              ₹10
            </button>
            <button
              className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700 disabled:cursor-not-allowed"
              onClick={() => pay(2000)}
              disabled={
                paymentForm.name.length < 3 || paymentForm.message.length < 4
              }
            >
              ₹20
            </button>
            <button
              className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700 disabled:cursor-not-allowed"
              onClick={() => pay(3000)}
              disabled={
                paymentForm.name.length < 3 || paymentForm.message.length < 4
              }
            >
              ₹30
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      ;
    </>
  );
}
