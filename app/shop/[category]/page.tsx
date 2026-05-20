import Link from "next/link";
import { supabase } from "../../../src/lib/supabase";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  category: string;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryName = category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const { data: products } = await supabase
  .from("products")
  .select("*")
  .eq("category", categoryName)
  .returns<Product[]>();
    

  return (
    <main className="min-h-screen bg-[#fff8f8] px-6 py-16 text-[#3b1f2b]">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm text-[#8b123f]">
          ← Back Home
        </Link>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#e6007e]">
          Cakes By Livvie Collection
        </p>

        <h1 className="mt-5 text-5xl font-semibold text-[#7b1238] md:text-7xl">
          {categoryName}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d4a57]">
          Discover beautifully crafted cakes made for unforgettable celebrations.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {(products ?? []).map((cake) => (
            <div
              key={cake.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg"
            >
              <img
                src={cake.image_url}
                alt={cake.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h2 className="text-2xl text-[#7b1238]">
                  {cake.name}
                </h2>

                <p className="mt-2 text-lg font-semibold text-[#e6007e]">
                  KSh {cake.price}
                </p>

                <Link
                  href={`/cakes/${cake.slug}`}
                  className="mt-5 inline-block rounded-full bg-[#8b123f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6f0e32]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}