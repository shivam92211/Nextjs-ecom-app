import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import YoutubeIcon from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute
                left-0 -bottom-0.5 group-hover:w-full transition-[width] ease 
                duration-300
                ${router.asPath == href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [model, setMode] = useThemeSwitcher();

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center 
      justify-between"
      >
          
          {/* <button className="flex flex-col bg-green-700 justify-center items-center ">
              <span className="bg-teal-400 block w-6 rounded-sm -translate-y-0.5"></span>
              <span className="bg-teal-400 block w-6 rounded-sm "></span>
              <span className="bg-teal-400 block w-6 rounded-sm -translate-y-0.5  "></span>
          </button> */}

      <nav>
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/products" title="Products" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
        <CustomLink href="/about" title="About" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.instagram.com/minifit.co"
          target={"_blank"}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.8 }}
          className="items-center mx-3"
        >
          <FaInstagram
            size={35}
            style={{ color: "#d62976", marginRight: "1rem" }}
          />
        </motion.a>
        <motion.a
          href="https://wa.me/c/918108419746"
          target={"_blank"}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.8 }}
          className="items-center mx-3"
        >
          <FaWhatsapp
            size={35}
            style={{ color: "128C7E", marginRight: "1rem" }}
          />
        </motion.a>
        <motion.a
          href="https://youtube.com/@minifit.corporation"
          target={"_blank"}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.8 }}
          className="items-center mx-3"
        >
          <FaYoutube
            size={35}
            style={{ color: "#FF0000", marginRight: "1rem" }}
          />
        </motion.a>

        <button className="flex flex-col bg-green-700 justify-center items-center ">
              <span className="bg-teal-400 block w-6 rounded-sm -translate-y-0.5"></span>
              <span className="bg-teal-400 block w-6 rounded-sm "></span>
              <span className="bg-teal-400 block w-6 rounded-sm -translate-y-0.5  "></span>
          </button>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {model === "dark" ? (
            <FaSun className={"fill-dark"} />
          ) : (
            <FaMoon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
