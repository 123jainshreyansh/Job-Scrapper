import { Container } from '@/src/components/container'
import React from 'react'

 export const Left = () => {
  return (
    <Container>
      <div className="px-40 py-2 flex items-center flex-col w-full my-20 -ml-100">
        <button className="border mx-25 px-4 py-1 rounded-full border-gray-200 hover:bg:gray-200 transition cursor-pointer duration-200 bg-gray-100 text-gray-600">
          <span className="mx-2 border border-neutral-800 px-1 rounded-full">
            Update
          </span>
          Now Supporting Github Authentication
        </button>
        <h1 className="text-5xl font-bold tracking-tight my-4 mx-20 items-center justify-center">
          Welcome back to <br />
          your job dashboard
        </h1>
        <p className="text-gray-600 text-lg ">
          Log in to continue browsing opportunities tailored <br />to your skills and
          goals.
        </p>


      </div>
    </Container>
  );
}
