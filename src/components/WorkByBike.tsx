import { ArrowRight } from "lucide-react";

export function WorkByBike() {
  return (
    <section
      aria-labelledby="work-by-bike-title"
      className="mx-auto flex min-h-[620px] w-full max-w-[1440px] flex-col items-center gap-10 overflow-hidden px-6 py-16 sm:px-10 lg:gap-12 lg:px-16"
      id="work-by-bike"
    >
      <div className="animate-image-enter relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
        <div className="absolute left-[12%] top-[12%] aspect-square w-[78%] rounded-full bg-emerald-500" />
        <div className="absolute left-[8%] top-[5%] z-20 flex flex-col gap-[10px]">
          {[40, 65, 82, 88, 88, 88, 88, 84, 74, 62, 42].map((width, index) => (
            <span
              aria-hidden="true"
              className="h-[3px] rounded-full bg-emerald-500"
              key={index}
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
        <div className="absolute left-[12%] top-[12%] aspect-square w-[78%] overflow-hidden rounded-full">
          <img
            alt="Cyclists riding together outdoors"
            className="h-full w-full object-cover object-[42%_center] grayscale"
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-emerald-500/80"
            style={{ clipPath: "ellipse(48% 72% at 100% 50%)" }}
          />
        </div>
      </div>

      <div className="animate-fade-up w-full text-center">
        <h2
          className="mb-7 text-4xl font-medium tracking-[-0.035em] text-black sm:text-5xl"
          id="work-by-bike-title"
        >
          To Work By Bike
        </h2>
        <p className="mx-auto max-w-[850px] text-base leading-8 text-[#777] sm:text-lg sm:leading-[2.35rem]">
          Award Winning Adventure Tours and vacations to the world&apos;s most
          fascinating destinations. We specialize in small group tours and
          tailor made vacations. After many months design and development
          raking over every detail of what a Kalles is ready to take your online
          empire to the next level.
        </p>
        <a
          className="mt-10 inline-flex h-[60px] min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#222] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-emerald-600"
          href="#shop"
        >
          Let go
          <ArrowRight size={20} strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
}
