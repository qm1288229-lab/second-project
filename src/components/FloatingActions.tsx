import { ArrowUp, ShoppingBag } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <aside
        aria-label="Store shortcuts"
        className="fixed right-0 top-[24vh] z-40 hidden flex-col items-end gap-6 sm:flex"
      >
        <a
          className="bg-white px-8 py-4 text-xl text-[#222] shadow-[0_0_18px_rgba(0,0,0,0.12)]"
          href="#shop"
        >
          <strong className="font-semibold">68+</strong> demos
        </a>
        <a
          className="flex h-[66px] items-center gap-2 bg-[#d71927] px-7 text-lg font-medium text-white transition-colors hover:bg-[#ba1320]"
          href="#shop"
        >
          <ShoppingBag size={21} />
          Buy now
        </a>
      </aside>
      <a
        aria-label="Back to top"
        className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-white text-[#222] shadow-[0_0_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
        href="#top"
      >
        <ArrowUp size={21} strokeWidth={1.5} />
      </a>
    </>
  );
}
