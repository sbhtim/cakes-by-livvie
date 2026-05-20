import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { supabase } from "../../../src/lib/supabase";
import AddToCartButton from "../../components/AddToCartButton";

export const dynamic = "force-dynamic";
type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
};

export default async function CakeDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: cake } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single<Product>();

  if (!cake) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8f8] px-6">
        <div className="text-center">
          <h1 className="text-4xl text-[#7b1238]">Cake not found</h1>
          <Link href="/" className="mt-6 inline-block text-[#e6007e]">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Cakes By Livvie, I would like to order:\n\nCake: ${cake.name}\nPrice: KSh ${cake.price}\nCategory: ${cake.category}\n\nName:\nLocation:\nDelivery Date:\nCake Message:`
  );

  return (
    <main className="min-h-screen bg-[#fff8f8] px-6 py-16 text-[#3b1f2b]">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
          <img
            src={cake.image_url}
            alt={cake.name}
            className="h-[560px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#e6007e]">
            {cake.category}
          </p>

          <h1 className="mt-4 text-5xl text-[#7b1238] md:text-7xl">
            {cake.name}
          </h1>

          <p className="mt-6 text-3xl font-semibold text-[#e6007e]">
            KSh {cake.price}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d4a57]">
            {cake.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/254758827373?text=${whatsappMessage}`}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              <FaWhatsapp size={22} />
              Order on WhatsApp
            </a>

<AddToCartButton
  id={cake.id}
  name={cake.name}
  price={cake.price}
  image_url={cake.image_url}
/>
          </div>

          <Link href="/" className="mt-8 text-sm text-[#8b123f]">
            ← Back to cakes
          </Link>
        </div>
      </div>
    </main>
  );
}