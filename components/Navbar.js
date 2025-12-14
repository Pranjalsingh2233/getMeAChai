"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <header className="bg-gray-900 text-white px-4 h-16">
      <nav className="flex justify-between items-center h-full">
        <div className="logo font-bold text-lg flex justify-center items-center">
          <img src="/tea.gif" alt="tea" width={44} />
          <span>GetMeAChai!</span>
        </div>
        {/* <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Sign Up</li>
          <li>Contact</li>
        </ul> */}
        <div>
          <Link href="/login">
            <button className="rounded text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
