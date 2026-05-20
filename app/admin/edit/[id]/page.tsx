import Link from "next/link";
import { supabase } from "../../../../src/lib/supabase";
import EditCakeForm from "./EditCakeForm";
import AdminGuard from "../../AdminGuard";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
};

export default async function EditCakePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: cake } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single<Product>();

  if (!cake) {
    return <div>Cake not found</div>;
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-[#fff8f8] px-6 py-16 text-[#3b1f2b]">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 shadow-xl">
          <Link href="/admin" className="text-sm text-[#8b123f]">
            ← Back to Admin
          </Link>

          <h1 className="mt-8 text-5xl text-[#7b1238]">
            Edit Cake
          </h1>

          <EditCakeForm cake={cake} />
        </div>
      </main>
    </AdminGuard>
  );
}