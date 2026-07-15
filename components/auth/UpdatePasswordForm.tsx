"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function UpdatePasswordForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Password updated successfully.");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleUpdate}
      className="mx-auto flex w-full max-w-md flex-col gap-4"
    >
      <input
        type="password"
        placeholder="New Password"
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
        className="rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
      >
        {loading ? "Updating..." : "Update Password"}
      </button>

      {message && (
        <p className="text-center text-sm text-zinc-300">
          {message}
        </p>
      )}
    </form>
  );
}