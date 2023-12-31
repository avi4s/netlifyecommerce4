import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalCart from "../ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "@/Components/Navbar/Navbar";
import ToastMessage from "../ToastMessage/ToastMessage";
import cartActions from "../../Redux/Action/CartAction";
import productDetailsAction from "../../Redux/Action/ProductDetails";
import Button from "@/Components/Button/Button";

const ProductDetails = () => {
  const [products, setProducts] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastMessageOpen, setIsToastMessageOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const productDetailsInfo = useSelector(
    (state) => state?.product_details_data?.ProductDetails
  );

  const router = useRouter();
  useEffect(() => {
    dispatch(
      productDetailsAction.ProductDetailsActionHandler(router.query.index)
    );
  }, []);

  useEffect(() => {
    if (productDetailsInfo) {
      setProducts(productDetailsInfo);
    }
  }, [productDetailsInfo]);

  const addToCart = (product) => {
    dispatch(cartActions.addToCartItem({ ...product, quantity }));
    openMessage();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openMessage = () => {
    setIsToastMessageOpen(true);
    setTimeout(function () {
      closeMessage();
    }, 2000);
  };
  const closeMessage = () => {
    setIsToastMessageOpen(false);
  };
  const handleQuantityAdd = (e) => {
    setQuantity(quantity + 1);
  };
  const handleQuantityLess = (e) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Navbar backgroundColor="#1f2d3d" label="Ecommerce" />
      {isToastMessageOpen && <ToastMessage closeMessage={closeMessage} />}
      <div className="container px-5 py-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex ">
          <img
            src={products?.image}
            className="lg:w-1/2 w-full p-5 object-center rounded border border-gray-200"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-teal-500">
            <h5 className="text-4xl pb-6 font-bold">{products?.title}</h5>
            <h5 className="pb-4 font-semibold">{products?.category}</h5>
            <div className="flex items-center mt-auto pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
              </svg>
              <h5 className="text-white-500 font-bold">
                {products.rating?.rate}
              </h5>
            </div>
            <h5 className="leading-relaxed pb-4">{products?.description}</h5>
            <h6 className="text-xl pb-8">${products?.price}</h6>
            <div>
              <div className="justify-center flex items-center mb-6">
                <h1 className="font-semibold">Quantity:</h1>
                <div className="ml-2">
                  <Button variant="increment" onClick={handleQuantityLess}>
                    -
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    className="border border-gray-300  w-8"
                    style={{ textAlign: "center" }}
                  />
                  <Button variant="increment" onClick={handleQuantityAdd}>
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="">
              <Button
                variant={`${
                  quantity === 0 ? "add-to-cart-disable" : "add-to-cart-active"
                }`}
                onClick={() => addToCart(products)}
                disabled={quantity === 0}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <ModalCart
            closeModal={closeModal}
            products={products}
            quantity={quantity}
          />
        </div>
      )}
    </>
  );
};
export default ProductDetails;
