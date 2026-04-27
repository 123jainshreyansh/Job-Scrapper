"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { GoogleIcon, GitHubIcon, EyeIcon, EyeOffIcon, ShieldIcon } from "./icons";

// ── Constants ──────────────────────────────────────────────────────────────────
const INPUT_CLASS =
  "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all duration-200";

const OAUTH_PROVIDERS = [
  { id: "google", label: "Continue with Google", Icon: GoogleIcon },
  { id: "github", label: "Continue with GitHub", Icon: GitHubIcon },
] as const;

// ── Sub-components ─────────────────────────────────────────────────────────────
const Divider = () => (
  <div className="flex items-center gap-3 my-5">
    <div className="flex-1 h-px bg-gray-100" />
    <span className="text-xs text-gray-400 font-medium">or sign up with email</span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  half?: boolean;
}

const FormField = ({ id, label, children, half }: FormFieldProps) => (
  <div className={`flex flex-col gap-1.5 ${half ? "flex-1" : ""}`}>
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {children}
  </div>
);

// ── Right Panel (Sign Up Card) ─────────────────────────────────────────────────
export const Right = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms and Privacy Policy.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Something went wrong.");
      } else {
        await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // flex-1 mirrors Left so both columns are equally weighted
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-gray-100 px-8 py-8">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Create account</h2>
          <p className="text-sm text-gray-400">Start with Google, GitHub, or your work email</p>
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
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">

          {/* First + Last name row */}
          <div className="flex gap-3">
            <FormField id="signup-first-name" label="First name" half>
              <input
                id="signup-first-name"
                type="text"
                placeholder="Aarav"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={INPUT_CLASS}
                required
              />
            </FormField>
            <FormField id="signup-last-name" label="Last name" half>
              <input
                id="signup-last-name"
                type="text"
                placeholder="Sharma"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={INPUT_CLASS}
                required
              />
            </FormField>
          </div>

          <FormField id="signup-email" label="Work Email">
            <input
              id="signup-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={INPUT_CLASS}
              required
            />
          </FormField>

          {/* Password + Confirm row */}
          <div className="flex gap-3">
            <FormField id="signup-password" label="Password" half>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${INPUT_CLASS} pr-10`}
                  required
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
            </FormField>
            <FormField id="signup-confirm-password" label="Confirm password" half>
              <div className="relative">
                <input
                  id="signup-confirm-password"
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${INPUT_CLASS} pr-10`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </FormField>
          </div>

          <p className="text-xs text-gray-400 -mt-1">
            Use at least 8 characters to secure your account.
          </p>

          {/* Error message */}
          {error && (
            <p className="text-xs text-red-500 font-medium -mt-1">{error}</p>
          )}

          {/* Terms checkbox */}
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input
              id="signup-terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
            />
            <span className="text-xs text-gray-500">
              I agree to the{" "}
              <Link href="/terms" className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-2">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-1 cursor-pointer"
          >
            {isLoading ? "Creating account…" : "Create Account"}
          </button>

          {/* Free / Secure row */}
          <div className="flex items-center justify-between -mt-1">
            <span className="text-xs text-gray-400">Free to get started</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
              <ShieldIcon />
              Secure sign up
            </span>
          </div>
        </form>

        {/* Sign in link */}
        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
