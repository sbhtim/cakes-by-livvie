"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "./CartContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: Props) {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Cakes By Livvie, I would like to order:\n\n${cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - KSh ${
            item.price * item.quantity
          }`
      )
      .join("\n")}\n\nTotal: KSh ${total}\n\nName:\nLocation:\nDelivery Date:\nCake Message:`
  );

  return (
    <>
      {open && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-[998] bg-black/40"
          aria-label="Close overlay"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[999] flex h-screen w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-pink-100 px-6 py-5">
          <h2 className="text-3xl font-semibold text-[#7b1238]">
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#7b1238] hover:bg-pink-50"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-[#8b7a80]">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5 flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-[#e6007e] hover:underline"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-pink-100 bg-[#fff8f8] p-4"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-[#7b1238]">
                            {item.name}
                          </h3>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="rounded-full p-2 text-[#e6007e] hover:bg-pink-100"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <p className="mt-2 font-semibold text-[#e6007e]">
                          KSh {item.price * item.quantity}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-[#7b1238]"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="min-w-[20px] text-center font-semibold text-[#7b1238]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-[#7b1238]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="shrink-0 border-t border-pink-100 bg-white px-6 py-5">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-lg text-[#7b1238]">
              Total
            </p>

            <p className="text-3xl font-semibold text-[#e6007e]">
              KSh {total}
            </p>
          </div>

          <a
            href={`https://wa.me/254758827373?text=${whatsappMessage}`}
            target="_blank"
            className={`block rounded-full px-6 py-4 text-center font-semibold text-white transition ${
              cart.length === 0
                ? "pointer-events-none bg-gray-300"
                : "bg-[#25D366] hover:bg-[#1fb85a]"
            }`}
          >
            Checkout on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}