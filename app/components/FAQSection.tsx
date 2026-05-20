"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How can I order a custom cake?",
    answer: "You can order through WhatsApp. Send your preferred design, size, date, and cake message.",
  },
  {
    question: "Do you deliver cakes?",
    answer: "Delivery is available for wedding cakes only and is paid separately.",
  },
  {
    question: "How early should I place my order?",
    answer: "Please order as early as possible, especially for custom and wedding cakes.",
  },
  {
    question: "What payment method do you accept?",
    answer: "Payment is made through M-Pesa Send Money.",
  },
  {
    question: "Do you make wedding cakes?",
    answer: "Yes, Cakes By Livvie makes elegant wedding cakes for special celebrations.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-4xl font-semibold text-[#e6007e]">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-xl border border-pink-100 bg-white px-6 py-5 shadow-sm"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium text-[#3b1f2b]">
                {faq.question}
              </span>

              <span className="text-2xl font-bold text-[#e6007e]">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <p className="mt-4 leading-7 text-[#6d4a57]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}