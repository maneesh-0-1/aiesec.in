"use client";

import { useRouter } from "next/navigation";

export default function MockLeadButton() {
  const router = useRouter();

  const generateMock = async () => {
    const res = await fetch("/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: "Test",
        last_name: "Lead",
        email: `test_${Math.floor(Math.random() * 1000)}@example.com`,
        phone: "9876543210",
        lc_id: 123,
        programme_id: 7,
      }),
    });
    if (res.ok) router.refresh();
  };

  return (
    <button
      onClick={generateMock}
      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg"
    >
      Generate Mock Lead
    </button>
  );
}
