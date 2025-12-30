"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateProfile, fetchUsers } from "@/actions/userActions";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Dashboard() {
  const { data: session, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    getData();
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const getData = async () => {
    let u = await fetchUsers(session.user.name);
    setFormData(u);
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    username: "",
    profilePic: "",
    coverPic: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (data) => {
    update();
    let a = await updateProfile(data, session.user.name);
    toast("Profile Updated Successfully!", {
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
  };

  return (
    <div className="py-16 max-w-3xl mx-auto px-6 md:px-0">
      <h1 className="text-center mb-10 text-2xl md:text-3xl font-bold">
        Welcome to your Dashboard
      </h1>
      <form action={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="name"
          name="name"
          value={formData.name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="email"
          id="email"
          name="email"
          value={formData.email}
        />
        <br />
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="username"
          id="username"
          name="username"
          value={formData.username}
        />
        <br />
        <label htmlFor="profile">Profile Picture</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="profile"
          name="profilePic"
          value={formData.profilePic}
        />
        <br />
        <label htmlFor="cover">Cover Picture</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="cover"
          name="coverPic"
          value={formData.coverPic}
        />
        <br />
        <label htmlFor="razorpayId">Razorpay Id</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-5 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="razorpayId"
          name="razorpayId"
          value={formData.razorpayId}
        />
        <br />
        <label htmlFor="razorpaySecret">Razorpay Secret</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-5 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="razorpaySecret"
          name="razorpaySecret"
          value={formData.razorpaySecret}
        />
        <br />
        <button
          className="bg-blue-700 w-full p-2 rounded-lg hover:bg-blue-800 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
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
    </div>
  );
}
