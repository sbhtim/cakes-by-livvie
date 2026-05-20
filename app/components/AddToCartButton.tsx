"use client";

import { useCart } from "./CartContext";

type Props = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image_url,
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id,
          name,
          price,
          image_url,
          quantity: 1,
        })
      }
      className="rounded-full bg-[#8b123f] px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-[#6f0e32]"
    >
      Add To Cart
    </button>
  );
}