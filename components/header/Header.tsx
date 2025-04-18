'use client';

import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-indigo-600">MyApp</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600">Home</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">Features</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">Pricing</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">About</a>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              onClick={() => router.push("/login")}
              className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
