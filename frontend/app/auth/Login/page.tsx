"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-4xl font-extrabold tracking-tight text-[#E23744]">
            zomato
          </p>
          <p className="mt-1 text-sm font-medium text-zinc-500">
            Discover the best food & drinks in your city
          </p>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl shadow-orange-200/50">
          <h1 className="text-2xl font-bold text-zinc-900">Login</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Welcome back! Login to continue
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={update("email")}
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#E23744] focus:bg-white focus:ring-2 focus:ring-[#E23744]/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={update("password")}
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#E23744] focus:bg-white focus:ring-2 focus:ring-[#E23744]/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FF7E1D] to-[#E23744] py-3 text-sm font-semibold text-white shadow-lg shadow-[#E23744]/30 transition hover:brightness-105 active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200" />
            or
            <span className="h-px flex-1 bg-zinc-200" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-zinc-500">
            New to Zomato?{" "}
            <Link
              href="/auth/Signup"
              className="font-semibold text-[#E23744] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-400">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </main>
  );
}
