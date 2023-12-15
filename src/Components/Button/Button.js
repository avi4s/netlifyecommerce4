import React from "react";

const Button = (props) => {
  const {
    variant,
    children,
    quantity,
    type,
    onClick,
    backgroundColor,
    label,
    ...rest
  } = props;

  const getVariantClass = () => {
    switch (variant) {
      case "add-to-cart-disable":
        return "text-white font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80 bg-gray-500";
      case "view":
        return " bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 mt-auto w-full max-w-[250px]";
      case "add-to-cart-active":
        return " font-medium text-white rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80 bg-red-500";
      case "increment":
        return "text-white bg-red-500 px-2 ";
      case "closemodal":
        return " bg-red-500 text-white px-4 py-2 ml-8 rounded-md";
      case "confirmorder":
        return " bg-red-500 text-white font-medium rounded-lg text-sm py-2.5 mt-auto block w-40 mx-auto";
      case "checkout":
        return " bg-red-500 text-white font-semibold rounded-lg w-64 py-2";
      case "continue":
        return " bg-red-500 w-44 text-white px-4 py-2 rounded-md";
      default:
        return "bg-pink-500 text-white";
    }
  };

  return (
    <>
      <button
        className={`active:${getVariantClass()} `}
        type={type}
        onClick={onClick}
        style={{ backgroundColor }}
      >
        {label || children}
      </button>
    </>
  );
};

export default Button;
