"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../src/lib/supabase";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
};

export default function EditCakeForm({ cake }: { cake: Product }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.currentTarget);

    const { error } = await supabase
      .from("products")
      .update({
        name: form.get("name"),
        slug: form.get("slug"),
price: Math.round(Number(form.get("price"))),
        category: form.get("category"),
        description: form.get("description"),
      })
      .eq("id", cake.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Cake updated successfully!");
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <input name="name" defaultValue={cake.name} required className="w-full rounded-xl border p-4" />
      <input name="slug" defaultValue={cake.slug} required className="w-full rounded-xl border p-4" />
      <input name="price" defaultValue={cake.price} required type="number" className="w-full rounded-xl border p-4" />

      <select name="category" defaultValue={cake.category} required className="w-full rounded-xl border p-4">
        <option>Birthday Cakes</option>
        <option>Wedding Cakes</option>
        <option>Chocolate Cakes</option>
        <option>Cupcakes</option>
        <option>Custom Cakes</option>
        <option>Signature Cakes</option>
      </select>

      <textarea name="description" defaultValue={cake.description} className="w-full rounded-xl border p-4" rows={5} />

      <button disabled={loading} className="rounded-full bg-[#8b123f] px-8 py-4 font-semibold text-white disabled:opacity-60">
        {loading ? "Updating..." : "Update Cake"}
      </button>
    </form>
  );
}