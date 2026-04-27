"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => (
  <nav className="flex items-center justify-between w-full px-12 py-5">
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/images/logo.svg"
        alt="JobScraper Logo"
        width={28}
        height={28}
      />
      <span className="text-base font-bold text-gray-900 tracking-tight">
        JobScraper
      </span>
    </Link>

    <Link
      href="/"
      className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-200 flex items-center gap-1"
    >
      Return to website <span>→</span>
    </Link>
  </nav>
);
