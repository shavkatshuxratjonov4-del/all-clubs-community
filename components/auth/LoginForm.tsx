"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { supabase } from "@/lib/supabase/client";
import { syncUserProfile } from "@/lib/supabase/profile";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await syncUserProfile(data.user);
    }

    setMessage("✅ Login successful");

    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 700);

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4"
    >
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-green-500"
      />

      <div className="text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-green-500 hover:text-green-400"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Loading..." : "Login"}
      </button>

      {message && (
        <p className="text-center text-sm text-zinc-300">
          {message}
        </p>
      )}

      <div className="mt-4 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
        <p>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            Create Account
          </Link>
        </p>
      </div>
    </form>
  );
}