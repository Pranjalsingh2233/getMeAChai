"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/login");
  }
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    username: "",
    profile: "",
    cover: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h1 className="text-center mb-10 text-3xl font-bold">
        Welcome to your Dashboard
      </h1>
      <form>
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
          name="profile"
          value={formData.profile}
        />
        <br />
        <label htmlFor="cover">Cover Picture</label>
        <input
          onChange={handleChange}
          className="mt-2 mb-2 p-2 w-full bg-slate-800 rounded-lg"
          type="text"
          id="cover"
          name="cover"
          value={formData.cover}
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
    </div>
  );
}
