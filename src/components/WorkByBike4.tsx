import { BikeProductSection, type BikeProduct } from "./BikeProductSection";

const products: BikeProduct[] = [
  {
    name: "Ridge Trail 29",
    category: "Mountain bikes",
    price: "$799.00",
    image:
      "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mountain bike on a rocky trail",
    alternateImageAlt: "Rider with a bike above a mountain valley",
    discount: "−15%",
  },
  {
    name: "City Classic",
    category: "City bikes",
    price: "$529.00",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Classic city bike",
    alternateImageAlt: "Orange city bicycle",
  },
  {
    name: "Summit Explorer",
    category: "Adventure bikes",
    price: "$949.00",
    image:
      "https://images.unsplash.com/photo-1534146789009-76ed5060ec70?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://plus.unsplash.com/premium_photo-1731959001009-bdd8a7e0ca1e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mountain cyclist on a high trail",
    alternateImageAlt: "Cyclist riding across an open trail",
  },
];

export function WorkByBike4() {
  return (
    <BikeProductSection
      id="best-sellers"
      products={products}
      subtitle="Customer favorites, ready for your next ride"
      title="Best Sellers"
    />
  );
}
