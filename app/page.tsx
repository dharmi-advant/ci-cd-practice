"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <div className="w-full max-w-sm rounded-2xl border border-stone-200 dark:border-stone-700 bg-[var(--card)] shadow-lg overflow-hidden">
        <header className="px-5 py-4 border-b border-stone-200 dark:border-stone-700">
          <h1 className="text-lg font-semibold text-[var(--foreground)]">
            Overview
          </h1>
          <p className="text-sm text-[var(--muted)] mt-0.5">
            Quick stats
          </p>
        </header>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-[var(--background)] dark:bg-stone-800/50 px-4 py-3">
            <span className="text-sm text-[var(--muted)]">Clicks</span>
            <span className="text-xl font-semibold tabular-nums text-[var(--foreground)]">
              {count}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-[var(--background)] dark:bg-stone-800/50 px-4 py-3">
            <span className="text-sm text-[var(--muted)]">Status</span>
            <span className="text-sm font-medium text-[var(--accent)]">
              Active
            </span>
          </div>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full py-2.5 rounded-xl font-medium text-white bg-[var(--accent)] hover:opacity-90 transition-opacity"
          >
            Add click
          </button>
        </div>
      </div>
    </div>
  );
}
