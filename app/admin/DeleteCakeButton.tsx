"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../src/lib/supabase";

export default function DeleteCakeButton({ id }: { id: string }) {
  const router = useRouter();

  async function deleteCake() {
    const confirmDelete = confirm("Delete this cake?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <button onClick={deleteCake} className="text-red-500">
      Delete
    </button>
  );
}