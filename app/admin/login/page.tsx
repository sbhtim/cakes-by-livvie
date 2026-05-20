"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../src/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff8f8] px-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-10 shadow-xl">
        <h1 className="text-center text-5xl text-[#7b1238]">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <button
            disabled={loading}
            className="w-full rounded-full bg-[#8b123f] px-6 py-4 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}