import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import FAQSection from "./components/FAQSection";

export default function Home() {
const collections = [
  {
    title: "Birthday Cakes",
    slug: "birthday-cakes",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Wedding Cakes",
    slug: "wedding-cakes",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Chocolate Cakes",
    slug: "chocolate-cakes",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Cupcakes",
    slug: "cupcakes",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Custom Cakes",
    slug: "custom-cakes",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Signature Cakes",
    slug: "signature-cakes",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
  },
];

  const faqs = [
    "How can I order a custom cake?",
    "Do you deliver cakes?",
    "How early should I place my order?",
    "What payment method do you accept?",
    "Do you make wedding cakes?",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f8] pt-28 text-[#3b1f2b]">
<Header />

      <section className="relative">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#ff5ea8]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7b1238]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-[#ff4f93]">
              Now Taking Birthday & Wedding Orders
            </p>

            <h1 className="max-w-3xl text-6xl font-semibold leading-[1.02] text-[#7b1238] md:text-8xl">
              Luxury Cakes
              <br />
              Crafted With
              <br />
              Love.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6d4a57]">
              Elegant birthday, wedding, and custom cakes designed to make every celebration unforgettable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#shop" className="rounded-full bg-[#8b123f] px-8 py-4 font-semibold text-white shadow-xl hover:bg-[#6f0e32]">
                View Collections
              </a>

              <a href="https://wa.me/254758827373" target="_blank" className="rounded-full border border-[#8b123f] px-8 py-4 font-semibold text-[#8b123f] hover:bg-[#f9e4ea]">
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-[#ff5ea8] to-[#7b1238]" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Cake"
                className="h-[550px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute bottom-10 left-10 rounded-2xl bg-white/90 px-6 py-4 shadow-lg backdrop-blur">
                <p className="text-2xl text-[#7b1238]">Fresh • Elegant • Custom</p>
                <p className="mt-1 text-sm text-[#8b5670]">Cakes By Livvie • Mwingi Town</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl uppercase tracking-[0.35em] text-[#8b7a80]">
          Our Collection
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#7b1238]">{item.title}</h3>
                <Link href={`/shop/${item.slug}`} className="mt-5 inline-block rounded-full bg-[#8b123f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6f0e32]">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fffafb] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl uppercase tracking-[0.35em] text-[#8b7a80]">
            What Our Customers Say
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["M", "Maryanne", "Birthday Cake Client", "The cake was beautiful, elegant, and tasted amazing. Everyone at the party loved it."],
              ["L", "Lavenda", "Wedding Cake Client", "Cakes By Livvie exceeded my expectations. The wedding cake looked luxurious and tasted perfect."],
              ["S", "Sharon", "Custom Cake Client", "Beautiful designs, smooth ordering process, and amazing customer service. Highly recommended."],
            ].map(([letter, name, title, review]) => (
              <div key={name} className="rounded-[2rem] bg-[#fde8f1] p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8b123f] text-xl font-semibold text-white">
                    {letter}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#7b1238]">{name}</h3>
                    <p className="text-sm text-[#8b7a80]">{title}</p>
                  </div>
                </div>
                <p className="leading-8 text-[#5e4b53]">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<FAQSection />

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-[#f9dce8] px-6 py-14 text-center shadow-lg">
          <Image src="/images/logo.png" alt="Cakes By Livvie" width={120} height={120} className="mx-auto h-20 w-20 object-contain" />
          <h2 className="mt-4 text-4xl text-[#8b123f]">Cakes By Livvie</h2>
          <p className="mt-3 text-2xl text-[#e6007e]">Mwingi’s Leading Name In Luxury Cakes & Sweet Celebrations</p>

          <div className="mt-8 space-y-3 text-sm uppercase tracking-wider text-[#6d4a57]">
            <p>Mwingi Town</p>
            <p>Phone / WhatsApp: 0758827373</p>
            <p>Email: loisembau74@gmail.com</p>

          </div>

          <div className="mt-10 flex justify-center gap-5">
            <a href="https://www.instagram.com/mbaumwende" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e6007e] text-[#e6007e] hover:bg-[#e6007e] hover:text-white">
              <FaInstagram size={22} />
            </a>
            <a href="https://wa.me/254758827373" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-pink-100 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-14 text-center md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#3b1f2b]">Quick Links</h3>
            <div className="space-y-4 text-sm text-[#6d4a57]">
              <a href="#" className="block hover:text-[#8b123f]">Home</a>
              <Link href="/shop" className="block hover:text-[#8b123f]">Shop Cakes</Link>
              <a href="#contact" className="block hover:text-[#8b123f]">Contact Us</a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#3b1f2b]">Categories</h3>
            <div className="space-y-4 text-sm text-[#6d4a57]">
<Link href="/shop/birthday-cakes" className="block hover:text-[#8b123f]">
  Birthday Cakes
</Link>

<Link href="/shop/wedding-cakes" className="block hover:text-[#8b123f]">
  Wedding Cakes
</Link>

<Link href="/shop/chocolate-cakes" className="block hover:text-[#8b123f]">
  Chocolate Cakes
</Link>

<Link href="/shop/cupcakes" className="block hover:text-[#8b123f]">
  Cupcakes
</Link>

<Link href="/shop/signature-cakes" className="block hover:text-[#8b123f]">
  Signature Cakes
</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#3b1f2b]">Policies</h3>
            <div className="space-y-4 text-sm text-[#6d4a57]">
<Link
  href="/policies/ordering-process"
  className="block hover:text-[#8b123f]"
>
  Ordering Process
</Link>

<Link
  href="/policies/delivery-information"
  className="block hover:text-[#8b123f]"
>
  Delivery Information
</Link>

<Link
  href="/policies/payment-method"
  className="block hover:text-[#8b123f]"
>
  Payment Method
</Link>

<Link
  href="/policies/custom-cake-policy"
  className="block hover:text-[#8b123f]"
>
  Custom Cake Policy
</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl border-t border-[#f3b3cb] pt-8 text-center text-sm text-[#8b7a80]">
          © Cakes By Livvie 2026.
        </div>
      </section>

      <a href="https://wa.me/254758827373" target="_blank" className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl hover:scale-110">
        <FaWhatsapp size={26} />
      </a>
    </main>
  );
}