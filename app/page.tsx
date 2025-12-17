"use client";

import Link from "next/link";

export default function EntryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="rounded-xl bg-white dark:bg-zinc-950 p-8 shadow-xl w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold">
          Welcome to BalkanMarket
        </h1>

        {/* CLIENT */}
        <Link
          href="/"
          className="block w-full rounded-lg bg-zinc-900 text-white py-3 hover:bg-zinc-800 transition"
        >
          Client
        </Link>
        <Link
          href="/admin"
          className="block w-full rounded-lg bg-indigo-600 text-white py-3 hover:bg-indigo-500 transition"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}
