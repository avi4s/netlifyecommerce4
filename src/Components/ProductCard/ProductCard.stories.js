import React from "react";
import ProductCard from "./ProductCard";
export default {
  title: "ProductCard",
  component: ProductCard,
  variant: { control: "text" },
};
const Template = (args) => <ProductCard {...args} />;
export const ProductsCard = Template.bind({});
ProductsCard.args = {
  product: {
    id: 1,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    title: "Rolex",
    category: "Watch",
    rating: { rate: 4.5 },
  },
};
