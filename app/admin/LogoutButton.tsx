"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../src/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-[#8b123f] px-5 py-2 text-sm font-semibold text-[#8b123f] hover:bg-pink-50"
    >
      Logout
    </button>
  );
}