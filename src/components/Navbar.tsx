import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="relative flex justify-between items-center h-20 w-full z-50">
      <div className="flex-shrink-0 w-full">
        <div className="flex justify-between items-center py-4 px-5">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Menu cho màn hình lớn */}
          <div className="hidden md:flex justify-end items-center space-x-10">
            <Link
              to="/"
              className="uppercase text-customGray hover:text-black hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="uppercase text-customGray hover:text-black hover:underline underline-offset-4"
            >
              About us
            </Link>
            <Link
              to="/carrers"
              className="uppercase text-customGray hover:text-black hover:underline underline-offset-4"
            >
              Careers
            </Link>
            <Link
              to="/news"
              className="uppercase text-customGray hover:text-black hover:underline underline-offset-4"
            >
              News
            </Link>
            <Link
              to="/gallery"
              className="uppercase text-customGray hover:text-black hover:underline underline-offset-4"
            >
              Gallery
            </Link>
            <button className="bg-black uppercase text-white hover:text-neutral-400 px-2 py-1 rounded">
              Contact us
            </button>
          </div>

          {/* Nút mở menu trên mobile */}
          <div className="md:hidden flex items-center">
            <a className="uppercase pr-2">menu</a>
            <button
              className="outline-none mobile-menu-button "
              onClick={toggleMenu}
            >
              <img src="/images/menu.svg" alt="Logo" className="h-8 w-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu cho màn hình nhỏ */}
      {isOpen && (
        <div
          className="absolute top-20 left-0 w-full  h-screen bg-white   md:hidden flex flex-col items-center z-40 bg-scroll "
          style={{
            backgroundImage: `url(/images/mobileTab.svg)`,
            backgroundSize: "cover",
          }}
        >
          <a
            href="#"
            className="block text-sm px-2 py-4 uppercase text-customGray hover:text-black hover:underline underline-offset-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-sm px-2 py-4 uppercase text-customGray hover:text-black hover:underline underline-offset-4"
          >
            About us
          </a>
          <a
            href="#"
            className="block text-sm px-2 py-4 uppercase text-customGray hover:text-black hover:underline underline-offset-4"
          >
            Careers
          </a>
          <a
            href="#"
            className="block text-sm px-2 py-4 uppercase text-customGray hover:text-black hover:underline underline-offset-4"
          >
            News
          </a>
          <a
            href="#"
            className="block text-sm px-2 py-4 uppercase text-customGray hover:text-black hover:underline underline-offset-4"
          >
            Gallery
          </a>
          <button className="bg-black uppercase text-white hover:text-neutral-400 px-2 py-1 rounded">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
