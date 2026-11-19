import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

function PromoBar() {
  return (
    <div className="bg-[#26313f] text-white">
      <div className="mx-auto flex min-h-[50px] max-w-[1920px] items-center justify-between gap-4 px-5 text-sm md:min-h-[68px] md:px-8">
        <div className="hidden items-center gap-6 lg:flex">
          <a className="flex items-center gap-2.5 hover:text-white/75" href="tel:+0123456789">
            <Phone size={17} strokeWidth={1.5} />
            <span>+0123456789</span>
          </a>
          <a className="flex items-center gap-2.5 hover:text-white/75" href="mailto:kalles@domain.com">
            <span aria-hidden="true" className="text-lg leading-none">✉</span>
            <span>kalles@domain.com</span>
          </a>
        </div>
        <p className="flex-1 text-center text-xs sm:text-sm md:text-base">
          Summer sale discount off 50%!{" "}
          <a className="font-semibold text-yellow-300 hover:text-yellow-200" href="#shop">
            Shop Now
          </a>
        </p>
        <button className="hidden items-center gap-2 hover:text-white/75 sm:flex" type="button" aria-label="Currency: US dollars">
          <span aria-hidden="true" className="text-lg">🇺🇸</span>
          <span>USD</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <form
      className="hidden h-[58px] min-w-0 flex-1 items-center rounded-full border border-[#dedede] px-5 lg:flex"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="flex shrink-0 cursor-pointer items-center gap-2 border-r border-[#dedede] pr-4 text-sm text-[#858585]">
        <span>All Categories</span>
        <ChevronDown size={16} />
      </label>
      <input
        aria-label="Search for products"
        className="min-w-0 flex-1 bg-transparent px-5 text-sm text-[#282828] outline-none placeholder:text-[#858585]"
        placeholder="Search for products"
        type="search"
      />
      <button
        className="flex h-[48px] w-[170px] shrink-0 items-center justify-center rounded-full bg-[#ed0000] text-sm font-semibold text-white transition-colors hover:bg-[#cc0000]"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

function IconButton({
  label,
  children,
  count,
}: {
  label: string;
  children: ReactNode;
  count?: number;
}) {
  return (
    <button
      aria-label={label}
      className="relative flex h-10 w-10 items-center justify-center text-[#222] transition-colors hover:text-[#ed0000]"
      type="button"
    >
      {children}
      {count !== undefined && (
        <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#222] px-1 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <PromoBar />
      <div className="relative">
        <div className="mx-auto flex min-h-[82px] max-w-[1920px] items-center gap-5 bg-white px-5 md:min-h-[120px] md:px-8">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-[#222] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={25} strokeWidth={1.5} /> : <Menu size={27} strokeWidth={1.5} />}
          </button>
          <a className="shrink-0 text-[34px] font-extrabold leading-none tracking-[-2px] text-[#111827] sm:text-[38px]" href="#">
            kalles
          </a>
          <SearchBox />
          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-3">
            <IconButton label="Account">
              <UserRound size={25} strokeWidth={1.5} />
            </IconButton>
            <IconButton label="Wishlist, 0 items" count={0}>
              <Heart size={27} strokeWidth={1.5} />
            </IconButton>
            <IconButton label="Shopping cart, 0 items" count={0}>
              <ShoppingCart size={27} strokeWidth={1.5} />
            </IconButton>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute inset-x-0 top-full z-30 border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
            <form
              className="flex h-11 items-center gap-3 rounded-full border border-gray-200 px-4"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <Search size={18} className="text-gray-500" />
              <input
                aria-label="Search for products"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                placeholder="Search for products"
                type="search"
              />
            </form>
            <nav className="mt-4 flex flex-col divide-y divide-gray-100 text-sm">
              <a className="py-3" href="#trending-products">Shop all</a>
              <a className="py-3" href="#best-sellers">Bikes</a>
              <a className="py-3" href="#new-arrivals">Accessories</a>
            </nav>
          </div>
        )}
      </div>
      <section
        aria-label="Classic mountain bike collection"
        className="relative flex min-h-[500px] items-center overflow-hidden bg-[#30352f] bg-cover bg-center md:min-h-[min(710px,calc(100vh-188px))]"
        id="shop"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(13,20,19,.08) 0%, rgba(13,20,19,.14) 52%, rgba(13,20,19,.52) 100%), url('https://images.unsplash.com/photo-1534146789009-76ed5060ec70?auto=format&fit=crop&w=2200&h=1000&q=85')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1920px] justify-end px-6 py-20 sm:px-10 lg:px-16">
          <div className="animate-fade-up w-full max-w-[540px] text-center text-white md:mr-2 md:text-right">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] sm:text-base">
              More adventure, less limits
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">
              Classic
              <br />
              Mountain Bike
            </h1>
            <a
              className="mt-8 inline-flex h-[60px] min-w-[210px] items-center justify-center gap-3 bg-[#171717] px-8 text-sm font-semibold uppercase transition-colors hover:bg-[#ed0000]"
              href="#trending-products"
            >
              Shop now
              <ArrowRight size={20} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
