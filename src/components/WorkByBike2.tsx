import { useState } from "react";
import { X } from "lucide-react";

const bikeFeatures = [
  {
    id: "saddle",
    name: "Trail saddle",
    detail: "Comfort-shaped and grippy, built to keep you in control on rough trails.",
    left: "42%",
    top: "18%",
  },
  {
    id: "handlebars",
    name: "Wide handlebars",
    detail: "A lightweight, wide bar gives you steady handling on technical descents.",
    left: "57%",
    top: "17%",
  },
  {
    id: "frame",
    name: "Aluminium frame",
    detail: "A durable, lightweight frame balances responsive climbing with trail-ready strength.",
    left: "51%",
    top: "22%",
  },
  {
    id: "suspension",
    name: "Front suspension",
    detail: "120 mm of travel smooths out rocky trails and helps keep the front wheel planted.",
    left: "61%",
    top: "24%",
  },
  {
    id: "tires",
    name: "All-terrain tires",
    detail: "Knobby, tubeless-ready tires deliver confident grip on dirt, rock, and loose ground.",
    left: "44%",
    top: "29%",
  },
] as const;

export function WorkByBike2() {
  const [activeFeature, setActiveFeature] = useState<
    (typeof bikeFeatures)[number]["id"] | null
  >(null);
  const selectedFeature = bikeFeatures.find(
    (feature) => feature.id === activeFeature,
  );

  return (
    <section
      aria-label="Explore mountain bike features"
      className="relative isolate min-h-[560px] overflow-hidden bg-[#253039] sm:min-h-[620px] lg:min-h-[min(760px,85vh)]"
      id="bike-features"
    >
      <img
        alt="A mountain bike overlooking a mountain valley"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_25%]"
        src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=2000&h=1200&q=85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20"
      />

      <div className="animate-fade-up absolute left-5 top-6 max-w-[240px] text-white drop-shadow-md sm:left-10 sm:top-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Made for the outdoors
        </p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Explore the details
        </h2>
        <p className="mt-2 text-sm text-white/85">
          Tap a marker to discover more.
        </p>
      </div>

      {bikeFeatures.map((feature) => {
        const isActive = activeFeature === feature.id;

        return (
          <button
            aria-controls="bike-feature-details"
            aria-expanded={isActive}
            aria-label={`${isActive ? "Hide" : "Show"} ${feature.name} information`}
            className="group absolute z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#dc2631]/25 transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-14 sm:w-14"
            key={feature.id}
            onClick={() =>
              setActiveFeature(isActive ? null : feature.id)
            }
            style={{ left: feature.left, top: feature.top }}
            type="button"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dc2631] shadow-lg sm:h-10 sm:w-10">
              <span className="h-[11px] w-[11px] rounded-full bg-white" />
            </span>
          </button>
        );
      })}

      {selectedFeature && (
        <div
          className="animate-fade-up absolute z-20 w-[min(290px,calc(100%-32px))] -translate-x-1/2 rounded-lg bg-white p-5 text-[#222] shadow-xl"
          id="bike-feature-details"
          role="status"
          style={{
            left: selectedFeature.left,
            top: `calc(${selectedFeature.top} + 38px)`,
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dc2631]">
                Bike feature
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {selectedFeature.name}
              </h3>
            </div>
            <button
              aria-label="Close bike feature details"
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setActiveFeature(null)}
              type="button"
            >
              <X size={18} />
            </button>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {selectedFeature.detail}
          </p>
        </div>
      )}
    </section>
  );
}
