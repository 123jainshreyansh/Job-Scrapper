// Pure layout shell — no logic lives here.
import React from "react";
import { Navbar } from "./navbar";
import { Left } from "./left";
import { Right } from "./right";

export default function Signup() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, #e8e8f8 0%, #dcdcf0 40%, #c8c8e8 100%)",
      }}
    >
      <Navbar />

      {/* Equal two-column layout — px-12 matches navbar */}
      <main className="flex flex-1 items-center max-w-7xl mx-auto w-full px-12 gap-16 py-12">
        <Left />
        <Right />
      </main>
    </div>
  );
}
