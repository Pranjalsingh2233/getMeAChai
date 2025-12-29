import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 flex items-center justify-center text-white h-16">
      <p className="">
        Copyright &copy; {currentYear} Get me a chai - All Rights Reserved
      </p>
    </footer>
  );
}
