"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#f2d9df] bg-[#f9e4ea]/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Cakes By Livvie"
            width={90}
            height={90}
            priority
            className="h-14 w-14 object-contain"
          />

          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#b45b78]">
              Cakes By
            </p>
            <h1 className="script-font text-4xl text-[#7b1238]">Livvie</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link href="/" className="text-sm tracking-wide text-[#5e4b53] hover:text-[#8b123f]">Home</Link>
          <Link href="/#shop" className="text-sm tracking-wide text-[#5e4b53] hover:text-[#8b123f]">Collections</Link>
          <Link href="/shop" className="text-sm tracking-wide text-[#5e4b53] hover:text-[#8b123f]">Shop Cakes</Link>
          <Link href="/#contact" className="text-sm tracking-wide text-[#5e4b53] hover:text-[#8b123f]">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="hidden items-center gap-2 rounded-full bg-[#7b1238] px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#5f0d2b] sm:flex"
          >
            <ShoppingCart size={17} />
            Cart {cartCount}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full bg-white p-3 text-[#7b1238] shadow-md md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-pink-100 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-center">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/#shop">Collections</Link>
            <Link onClick={() => setOpen(false)} href="/shop">Shop Cakes</Link>
            <Link onClick={() => setOpen(false)} href="/#contact">Contact</Link>

            <button
              onClick={() => {
                setCartOpen(true);
                setOpen(false);
              }}
              className="mx-auto mt-2 flex items-center gap-2 rounded-full bg-[#7b1238] px-5 py-3 text-sm font-semibold text-white"
            >
              <ShoppingCart size={17} />
              Cart {cartCount}
            </button>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}