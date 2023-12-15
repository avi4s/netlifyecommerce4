import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalCart from "../../pages/ModalCart/ModalCart";

const Navbar = (props) => {
  const { backgroundColor, label, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart_data.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={`navbar p-4`} style={{ backgroundColor }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">{label}</Link>
        </div>
        <div className="hidden md:flex space-x-4 ">
          <Link href="/" className="text-white">
            Home
          </Link>
          <div className="flex">
            <FaShoppingCart className="mt-1 text-white" onClick={openModal} />
            <span className="ml-1 text-white">{cartItems?.length}</span>
          </div>
        </div>
        <div className="sm:hidden">
          <GiHamburgerMenu
            onClick={toggleNavbar}
            className="text-white cursor-pointer"
          />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 bg-slate-800 h-full w-36 p-4 transform translate-x-0">
            <Link href="/" className="block text-white">
              Home
            </Link>
            <div className="flex">
              <FaShoppingCart
                className="mt-1 text-white cursor-pointer"
                onClick={openModal}
              />
              <span className="ml-1 text-white">{cartItems?.length}</span>
            </div>
          </div>
        )}
        {isModalOpen && (
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>
            <ModalCart closeModal={closeModal} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
