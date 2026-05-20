import Link from "next/link";

const policies: Record<string, { title: string; content: string }> = {
  "ordering-process": {
    title: "Ordering Process",
    content:
      "Orders are placed through WhatsApp. Share the cake type, size, design, date needed, and any message you want on the cake.",
  },
  "delivery-information": {
    title: "Delivery Information",
    content:
      "Delivery is available for wedding cakes only and is paid separately. Other orders can be arranged through call or WhatsApp.",
  },
  "payment-method": {
    title: "Payment Method",
    content:
      "Payments are made through M-Pesa Send Money. Payment details are shared after confirming your order.",
  },
  "custom-cake-policy": {
    title: "Custom Cake Policy",
    content:
      "Custom cakes require clear design details and early booking. Final price depends on size, design, flavour, and decoration.",
  },
};

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = policies[slug];

  if (!policy) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8f8] px-6">
        <div className="text-center">
          <h1 className="text-4xl text-[#7b1238]">Policy not found</h1>
          <Link href="/" className="mt-6 inline-block text-[#e6007e]">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8f8] px-6 py-20 text-[#3b1f2b]">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 shadow-xl">
        <Link href="/" className="text-sm text-[#8b123f]">
          ← Back Home
        </Link>

        <h1 className="mt-8 text-5xl text-[#7b1238]">
          {policy.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#6d4a57]">
          {policy.content}
        </p>
      </div>
    </main>
  );
}