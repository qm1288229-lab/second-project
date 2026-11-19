import { Heart } from "lucide-react";

export type BikeProduct = {
  name: string;
  category: string;
  price: string;
  image: string;
  alternateImage: string;
  imageAlt: string;
  alternateImageAlt: string;
  discount?: string;
};

type BikeProductSectionProps = {
  title: string;
  subtitle: string;
  id: string;
  products: readonly BikeProduct[];
};

export function BikeProductSection({
  title,
  subtitle,
  id,
  products,
}: BikeProductSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      id={id}
    >
      <div className="mb-10 text-center sm:mb-14">
        <h2
          className="animate-fade-up text-3xl font-semibold tracking-[-0.035em] text-[#222] sm:text-5xl"
          id={titleId}
        >
          {title}
        </h2>
        <p className="mt-3 text-base text-[#858585] sm:text-xl">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {products.map((product, index) => (
          <article
            className="animate-fade-up group min-w-0 transition-transform duration-300 ease-out hover:-translate-y-1"
            key={product.name}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f2f2f2]">
              {product.discount && (
                <span className="absolute left-4 top-4 z-10 bg-orange-600 px-3 py-1 text-sm font-semibold text-white">
                  {product.discount}
                </span>
              )}
              <button
                aria-label={`Hold to see another view of ${product.name}`}
                className="absolute inset-0 z-[1] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-black"
                type="button"
              >
                <img
                  alt={product.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0"
                  src={product.image}
                />
                <img
                  alt={product.alternateImageAlt}
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100"
                  src={product.alternateImage}
                />
              </button>
              <button
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-sm transition-colors hover:text-red-600"
                type="button"
              >
                <Heart size={20} strokeWidth={1.6} />
              </button>
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#888]">
                {product.category}
              </p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <h3 className="font-medium text-[#222]">{product.name}</h3>
                <span className="shrink-0 text-sm font-semibold text-[#222]">
                  {product.price}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
