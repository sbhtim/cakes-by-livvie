import Link from "next/link";
import { supabase } from "../../src/lib/supabase";
import DeleteCakeButton from "./DeleteCakeButton";
import AdminGuard from "./AdminGuard";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";
type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image_url: string;
};

export default async function AdminPage() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<Product[]>();

  return (
    <AdminGuard>
      <main className="min-h-screen bg-[#fff8f8] px-6 py-16 text-[#3b1f2b]">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm text-[#8b123f]">
            ← Back Home
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#e6007e]">
                Cakes By Livvie
              </p>

              <h1 className="mt-3 text-5xl text-[#7b1238]">
                Admin Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <LogoutButton />

              <Link
                href="/admin/add"
                className="rounded-full bg-[#8b123f] px-6 py-3 font-semibold text-white"
              >
                Add New Cake
              </Link>
            </div>
          </div>

<div className="mt-12 overflow-x-auto rounded-[2rem] bg-white shadow-xl">
            <div className="grid min-w-[850px] grid-cols-5 border-b border-pink-100 px-6 py-4 text-sm font-semibold text-[#7b1238]">
              <p>Image</p>
              <p>Name</p>
              <p>Category</p>
              <p>Price</p>
              <p>Actions</p>
            </div>

            {(products ?? []).map((cake) => (
              <div
                key={cake.id}
                className="grid min-w-[850px] grid-cols-5 items-center border-b border-pink-50 px-6 py-4 text-sm"
              >
                <img
                  src={cake.image_url}
                  alt={cake.name}
                  className="h-16 w-16 rounded-xl object-cover"
                />

                <p className="font-medium text-[#7b1238]">
                  {cake.name}
                </p>

                <p>{cake.category}</p>

                <p className="font-semibold text-[#e6007e]">
                  KSh {cake.price}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={`/admin/edit/${cake.id}`}
                    className="text-[#8b123f]"
                  >
                    Edit
                  </Link>

                  <DeleteCakeButton id={cake.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </AdminGuard>
  );
}