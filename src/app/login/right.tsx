import { Container } from '@/src/components/container'
import React from 'react'
import Image from "next/image"

export const Right = () => {
  return (
    <Container>
      <div className="px-50  flex flex-col w-full mx-80 -mt-90">
        <div className="relative flex  border mx-10 px-10 py-70  top-0 rounded-3xl border-dotted border-gray-200 bg-gray-400  text-gray-600">
          <h2 className="absolute top-2 font-bold text-3xl mx-49 mt-5">
            Sign In
          </h2>
          <p className="absolute w-full items-center justify-center tracking-tight top-10 flex font-bold text-gray-600 -mx-7 mt-8">
            Choose a provider or use your email
          </p>
          <button className="text-inline absolute flex items-center justify-center top-20 text-xl font-bold text-gray-600 mx-20 mt-10 border border-gray-200 w-80 px-2 py-3.5 gap-5  cursor-pointer rounded-xl active:scale-95 transition-all duration-300">
            <Image
              src="/images/google.png"
              className="flex"
              alt="Google"
              width={24}
              height={24}
            />
            Continue with Google
          </button>

          <button className="text-inline absolute flex items-center justify-center top-0 text-xl font-bold text-gray-600 mx-20 mt-50 border border-gray-200 w-80 px-2 py-3.5 gap-5  cursor-pointer rounded-xl active:scale-95 transition-all duration-300">
            <Image
              src="/images/Github.png"
              className="flex"
              alt="Google"
              width={24}
              height={24}
            />
            Continue with GitHub
          </button>

          <div className="flex items-center w-full -mt-2 my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-lg font-medium">
              or continue with email
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-200 rounded-xl mt-10" />

 





        </div>
      </div>
    </Container>
  );
}
