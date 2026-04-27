"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { GoogleIcon, GitHubIcon, EyeIcon, EyeOffIcon } from "./icons";

// ── Constants ──────────────────────────────────────────────────────────────────
const INPUT_CLASS =
  "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all duration-200";

const OAUTH_PROVIDERS = [
  { id: "google", label: "Continue with Google", Icon: GoogleIcon },
  { id: "github", label: "Continue with GitHub", Icon: GitHubIcon },
] as const;

// ── Sub-components ─────────────────────────────────────────────────────────────
const Divider = () => (
  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-gray-100" />
    <span className="text-xs text-gray-400 font-medium">or continue with email</span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

const FormField = ({ id, label, children }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {children}
  </div>
);

// ── Right Panel (Sign In Card) ─────────────────────────────────────────────────
export const Right = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
    setIsLoading(false);
  };

  return (
    // flex-1 mirrors Left so both columns are equally weighted
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-gray-100 px-8 py-10">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h2>
          <p className="text-sm text-gray-400">Choose a provider or use your email</p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          {OAUTH_PROVIDERS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => signIn(id, { callbackUrl: "/dashboard" })}
              className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-[0.98]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        <Divider />

        {/* Email Form */}
        <form onSubmit={handleEmailSignIn} className="flex flex-col gap-4">
          <FormField id="login-email" label="Work Email">
            <input
              id="login-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="login-password" label="Password">
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${INPUT_CLASS} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </FormField>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-1 cursor-pointer"
          >
            {isLoading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
