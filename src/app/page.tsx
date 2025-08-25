"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            M
          </div>
          <h1 className="text-3xl font-bold">make.inc</h1>
        </div>

        <div className="max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            This is a starter template.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your AI agent is working and you should see changes soon.
          </p>
        </div>
      </main>
    </div>
  );
}
