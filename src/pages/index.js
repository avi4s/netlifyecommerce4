import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../Redux/Action/Products";
import Button from "@/Components/Button/Button";
import ProductCard from "@/Components/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  let dispatch = useDispatch();
  const productsItems = useSelector(
    (state) => state?.product_data?.ProductData
  );
  useEffect(() => {
    dispatch(productAction.ProductActionHandler());
  }, []);

  useEffect(() => {
    if (productsItems) {
      setProducts(productsItems);
    }
  }, [productsItems]);
  return (
    <>
      <Navbar backgroundColor="#1f2d3d" label="Ecommerce" />
      <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Home;
