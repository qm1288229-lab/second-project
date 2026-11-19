import { BikeProductSection, type BikeProduct } from "./BikeProductSection";

const products: BikeProduct[] = [
  {
    name: "Classic City Bike",
    category: "Urban collection",
    price: "$489.00",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Classic city bicycle",
    alternateImageAlt: "Orange bicycle detail",
    discount: "−29%",
  },
  {
    name: "Everyday Road Bike",
    category: "Commuter collection",
    price: "$629.00",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1578509557315-37510239a203?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Road bicycle in a bright studio",
    alternateImageAlt: "Green bicycle parked outdoors",
  },
  {
    name: "Alpine Mountain Bike",
    category: "Trail collection",
    price: "$899.00",
    image:
      "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?auto=format&fit=crop&w=1000&q=85",
    alternateImage:
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mountain bike on a rocky trail",
    alternateImageAlt: "Cyclist with a mountain bike",
  },
];

export function WorkByBike3() {
  return (
    <BikeProductSection
      id="trending-products"
      products={products}
      subtitle="Get through all trending products and get your best deal"
      title="Trending Products"
    />
  );
}
