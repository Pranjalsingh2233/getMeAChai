import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white px-4 h-16">
      <nav className="flex justify-between items-center h-full">
        <div className="logo font-bold">GetMeAChai!</div>
        <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Sign Up</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
