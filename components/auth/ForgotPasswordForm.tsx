"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "✅ Password reset link has been sent. Please check your email."
      );
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleReset}
      className="mx-auto flex w-full max-w-md flex-col gap-4"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      {message && (
        <p className="text-center text-sm text-zinc-300">
          {message}
        </p>
      )}

      <div className="mt-4 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
        <p>
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}