"use client";

import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import gradient from "../../../public/images/gradient.png";
import Overlay from "../../../public/images/Overlay.png";
import { Container } from "@/src/components/container";
import { Left } from "./left";
import { Right } from "./right";

export default function Login() {
  return (
    <Container>
      <Navbar/>
      <Left/>
      <Right/>
    </Container>
  );
}

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={`flex justify-items-end gap-2 py-4 ${className}`}>
      <Link href="/" className="flex font-extrabold">
        <Image
          src="/images/logo.svg"
          className="size-7"
          alt="JobScraper Logo"
          width={28}
          height={28}
        />
      </Link>
      <p className="text-lg font-extrabold">JobScrapper</p>


    </div>
   
);
};






