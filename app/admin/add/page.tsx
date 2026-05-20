import Link from "next/link";
import AddCakeForm from "./AddCakeForm";
import AdminGuard from "../AdminGuard";

export default function AddCakePage() {
  return (
    <AdminGuard>
      <main className="min-h-screen bg-[#fff8f8] px-6 py-16 text-[#3b1f2b]">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 shadow-xl">
          <Link href="/admin" className="text-sm text-[#8b123f]">
            ← Back to Admin
          </Link>

          <h1 className="mt-8 text-5xl text-[#7b1238]">Add New Cake</h1>

          <AddCakeForm />
        </div>
      </main>
    </AdminGuard>
  );
}