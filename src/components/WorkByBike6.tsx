import { useEffect, useRef, useState } from "react";
import { Timer } from "lucide-react";

const INITIAL_SECONDS = 99 * 24 * 60 * 60 + 21 * 60 * 60 + 30 * 60 + 52;

function formatTime(seconds: number) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [
    { value: days, label: "Days" },
    { value: hours, label: "hours" },
    { value: minutes, label: "minutes" },
    { value: remainingSeconds, label: "seconds" },
  ];
}

export function WorkByBike6() {
  const saleEndsAt = useRef(Date.now() + INITIAL_SECONDS * 1000).current;
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isZoomed, setIsZoomed] = useState(false);
  const timeParts = formatTime(secondsLeft);

  useEffect(() => {
    const updateCountdown = () => {
      setSecondsLeft(Math.max(0, Math.floor((saleEndsAt - Date.now()) / 1000)));
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(intervalId);
  }, [saleEndsAt]);

  return (
    <section
      aria-labelledby="featured-bike-title"
      className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12"
      id="featured-bike"
    >
      <div className="animate-image-enter relative overflow-hidden bg-white">
        <span className="absolute left-5 top-5 z-10 bg-orange-600 px-4 py-2 text-base font-semibold text-white">
          −29%
        </span>
        <button
          aria-label={isZoomed ? "Zoom out of the bicycle" : "Zoom in on the bicycle"}
          aria-pressed={isZoomed}
          className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setIsZoomed(!isZoomed)}
          type="button"
        >
          <img
            alt="Black classic road bicycle"
            className={`h-full w-full object-contain transition-transform duration-500 ${
              isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 hover:scale-110"
            }`}
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=90"
          />
        </button>
        <p className="sr-only" aria-live="polite">
          {isZoomed ? "Bicycle zoomed in" : "Bicycle at normal size"}
        </p>
      </div>

      <div className="animate-fade-up text-center lg:text-left">
        <h2
          className="text-2xl font-semibold text-[#252525] sm:text-3xl"
          id="featured-bike-title"
        >
          Sociosqu leo mus
        </h2>
        <p className="mt-4 flex items-center justify-center gap-3 text-2xl sm:text-3xl lg:justify-start">
          <span className="text-[#777] line-through">$70.00</span>
          <span className="font-medium text-red-600">$50.00</span>
        </p>
        <p className="mt-6 text-base leading-8 text-[#888] sm:text-lg">
          Design inspiration lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
          neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
        </p>

        <div className="mt-8">
          <p className="flex items-center justify-center gap-2 text-lg font-semibold uppercase text-[#292929] lg:justify-start">
            <Timer size={23} strokeWidth={1.8} />
            Hurry up! Sale ends in
          </p>
          <div
            aria-label="Sale countdown"
            aria-live="off"
            className="mt-5 grid grid-cols-4 gap-3"
            role="timer"
          >
            {timeParts.map(({ value, label }) => (
              <div className="text-center" key={label}>
                <span className="block text-3xl font-semibold tabular-nums text-[#222] sm:text-4xl">
                  {value}
                </span>
                <span className="mt-2 block text-sm capitalize text-[#444] sm:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          className="mt-8 h-[60px] w-full rounded-full bg-[#222] px-8 text-sm font-semibold uppercase text-white transition-colors hover:bg-red-600"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
