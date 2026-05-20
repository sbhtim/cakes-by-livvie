"use client";

import { useState } from "react";
import { supabase } from "../../../src/lib/supabase";

export default function AddCakeForm() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setLoading(true);

    const name = form.get("name") as string;
    const slug = form.get("slug") as string;
    const price = Number(form.get("price"));
    const category = form.get("category") as string;
    const description = (form.get("description") as string) || "";
    const image = form.get("image") as File;

    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("cake-images")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("cake-images")
      .getPublicUrl(fileName);

    const { error } = await supabase.from("products").insert({
      name,
      slug,
      price,
      category,
      description,
      image_url: data.publicUrl,
      is_featured: true,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Cake added successfully!");
    formElement.reset();
    setPreview(null);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <input name="name" required className="w-full rounded-xl border p-4" placeholder="Cake name" />

      <input name="slug" required className="w-full rounded-xl border p-4" placeholder="Slug e.g vanilla-birthday-cake" />

      <input name="price" required type="number" className="w-full rounded-xl border p-4" placeholder="Price" />

      <select name="category" required className="w-full rounded-xl border p-4">
        <option value="">Select category</option>
        <option>Birthday Cakes</option>
        <option>Wedding Cakes</option>
        <option>Chocolate Cakes</option>
        <option>Cupcakes</option>
        <option>Custom Cakes</option>
        <option>Signature Cakes</option>
      </select>

      <input
        name="image"
        required
        type="file"
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files?.[0];

          if (file) {
            setPreview(URL.createObjectURL(file));
          }
        }}
        className="w-full rounded-xl border p-4"
      />

      {preview && (
        <img
          src={preview}
          alt="Cake preview"
          className="h-64 w-full rounded-2xl object-cover"
        />
      )}

      <textarea
        name="description"
        className="w-full rounded-xl border p-4"
        placeholder="Description optional"
        rows={5}
      />

      <button
        disabled={loading}
        className="rounded-full bg-[#8b123f] px-8 py-4 font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Saving..." : "Save Cake"}
      </button>
    </form>
  );
}