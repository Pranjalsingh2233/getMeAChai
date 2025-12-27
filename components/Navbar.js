"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-gray-900 text-white px-4 h-16">
      <nav className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <div className="logo font-bold text-lg flex justify-center items-center">
            <img className="invertImg" src="/tea.gif" alt="tea" width={44} />
            <span>GetMeAChai!</span>
          </div>
        </Link>
        {/* <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Sign Up</li>
          <li>Contact</li>
          </ul> */}
        <div className="relative">
          {session && (
            <>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className=" inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-700 rounded me-5"
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 250);
                }}
              >
                Welcome {session.user.email}
                <svg
                  className="w-4 h-4 ms-1.5 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 absolute left-[125px] ${
                  showDropdown ? "" : "hidden"
                } bg-gray-900 mt-3 border border-default-medium rounded-lg shadow-lg w-44`}
              >
                <ul
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}

          {!session && (
            <Link href="/login">
              <button className="rounded text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
