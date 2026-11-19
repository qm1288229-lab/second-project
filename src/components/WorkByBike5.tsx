import { BikeProductSection, type BikeProduct } from "./BikeProductSection";

const products: BikeProduct[] = [
  {
    name: "Fresh Coast Road",
    category: "Road bikes",
    price: "$679.00",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1578509557315-37510239a203?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Road bicycle in a bright studio",
    alternateImageAlt: "Green bicycle parked outdoors",
  },
  {
    name: "Urban Motion",
    category: "Commuter bikes",
    price: "$559.00",
    image:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Orange bicycle against a warm background",
    alternateImageAlt: "Classic city bicycle",
    discount: "New",
  },
  {
    name: "Wild Path MTB",
    category: "Mountain bikes",
    price: "$879.00",
    image:
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Cyclist standing with a bike in the mountains",
    alternateImageAlt: "Mountain bike on a rocky trail",
  },
];

export function WorkByBike5() {
  return (
    <BikeProductSection
      id="new-arrivals"
      products={products}
      subtitle="Take a look at the latest bikes in our collection"
      title="New Arrivals"
    />
  );
}
