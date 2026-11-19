import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

function NewsletterForm({ footer = false }: { footer?: boolean }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Newsletter signup is not connected yet.");
  }

  return (
    <div>
      <form className="flex w-full" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={footer ? "footer-email" : "signup-email"}>
          Email address
        </label>
        <input
          className={`min-w-0 flex-1 border border-[#999] bg-transparent px-4 text-sm outline-none placeholder:text-[#888] focus:border-[#222] ${
            footer
              ? "h-12 rounded-l-full"
              : "h-[58px] bg-white/70 text-base"
          }`}
          id={footer ? "footer-email" : "signup-email"}
          placeholder="Enter email address"
          required
          type="email"
        />
        <button
          className={`flex shrink-0 items-center justify-center gap-3 bg-[#222] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-600 ${
            footer ? "rounded-r-full px-5 text-xs" : "px-5 text-sm sm:px-7"
          }`}
          type="submit"
        >
          {footer ? "Subscribe" : "Subscribe"}
          {!footer && <ArrowRight size={20} />}
        </button>
      </form>
      {message && (
        <p className="mt-2 text-xs text-[#666]" role="status">
          {message}
        </p>
      )}
    </div>
  );
}

const linkClass =
  "block py-1.5 text-sm text-[#858585] transition-colors hover:text-[#222] sm:text-base";

export function Footer() {
  return (
    <footer className="mt-auto">
      <section
        aria-labelledby="newsletter-title"
        className="bg-[#ededed] px-5 py-10 sm:px-8 sm:py-12 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2
              className="text-xl font-semibold text-[#111] sm:text-2xl"
              id="newsletter-title"
            >
              Be the first to know about our daily sales!
            </h2>
            <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#888] sm:text-base">
              Subscribe to our newsletters now and stay up-to-date with new
              collections, the latest lookbooks.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <div className="bg-[#f8f8fa] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          <div className="col-span-2 sm:col-span-1">
            <a
              className="text-[34px] font-extrabold leading-none tracking-[-2px] text-[#111827]"
              href="#top"
            >
              kalles
            </a>
            <address className="mt-7 space-y-4 not-italic">
              <p className="flex items-start gap-3 text-sm leading-6 text-[#333]">
                <MapPin className="mt-1 shrink-0 text-[#777]" size={19} />
                <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
              </p>
              <a className="flex items-center gap-3 text-sm text-[#333]" href="mailto:contact@company.com">
                <Mail className="shrink-0 text-[#777]" size={19} />
                contact@company.com
              </a>
              <a className="flex items-center gap-3 text-sm text-[#333]" href="tel:+0012233456">
                <Phone className="shrink-0 text-[#777]" size={19} />
                +001 2233 456
              </a>
            </address>
            <div className="mt-6 flex items-center gap-4 text-[#888]">
              <a aria-label="Facebook" className="hover:text-[#222]" href="#footer">
                <Facebook size={18} />
              </a>
              <a aria-label="Instagram" className="hover:text-[#222]" href="#footer">
                <Instagram size={18} />
              </a>
              <a aria-label="YouTube" className="hover:text-[#222]" href="#footer">
                <Youtube size={19} />
              </a>
              <a aria-label="Email us" className="hover:text-[#222]" href="mailto:contact@company.com">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Product categories">
            <h3 className="mb-4 font-semibold text-[#222]">Categories</h3>
            <a className={linkClass} href="#trending-products">Men</a>
            <a className={linkClass} href="#trending-products">Women</a>
            <a className={linkClass} href="#best-sellers">Accessories</a>
            <a className={linkClass} href="#new-arrivals">Shoes</a>
            <a className={linkClass} href="#new-arrivals">Watches</a>
            <a className={linkClass} href="#best-sellers">Bikes</a>
          </nav>

          <nav aria-label="Information">
            <h3 className="mb-4 font-semibold text-[#222]">Information</h3>
            <a className={linkClass} href="#work-by-bike">About us</a>
            <a className={linkClass} href="mailto:contact@company.com">Contact us</a>
            <a className={linkClass} href="#footer">Privacy Policy</a>
            <a className={linkClass} href="#footer">Shipping &amp; Delivery</a>
            <a className={linkClass} href="#footer">Terms &amp; Conditions</a>
            <a className={linkClass} href="#footer">Returns &amp; Exchanges</a>
          </nav>

          <nav aria-label="Useful links">
            <h3 className="mb-4 font-semibold text-[#222]">Useful links</h3>
            <a className={linkClass} href="#top">Store Location</a>
            <a className={linkClass} href="#trending-products">Latest Posts</a>
            <a className={linkClass} href="#top">My Account</a>
            <a className={linkClass} href="#bike-features">Size Guide</a>
            <a className={linkClass} href="mailto:contact@company.com">FAQs</a>
            <a className={linkClass} href="mailto:contact@company.com">Support</a>
          </nav>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-4 font-semibold text-[#222]">Newsletter Signup</h3>
            <p className="mb-5 text-sm leading-6 text-[#333]">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <NewsletterForm footer />
            <div
              aria-label="Accepted payment methods"
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold italic text-[#888]"
            >
              <span>PayPal</span>
              <span className="text-sm">VISA</span>
              <span>AMERICAN EXPRESS</span>
              <span className="text-sm">Skrill</span>
            </div>
          </div>
        </div>
        <div
          className="mx-auto mt-12 max-w-[1440px] border-t border-gray-200 pt-5 text-center text-xs text-[#888]"
          id="footer"
        >
          © Kalles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
