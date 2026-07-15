"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "✅ Account created successfully! Please check your email to verify your account."
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleRegister}
      className="mx-auto flex w-full max-w-md flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating..." : "Create Account"}
      </button>

      {message && (
        <p className="text-center text-sm text-zinc-300">
          {message}
        </p>
      )}

      <div className="mt-4 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-500 transition hover:text-green-400"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}