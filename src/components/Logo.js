import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div
      className="md:flex  item-center justify-center mt-5
          border-2 border-teal-400 rounded"
    >
      <MotionLink
        href="/"
        className="w-40 h-8 bg-dark text-light flex item-center justify-center rounded
                  text-2xl fount-bold"
        whileHover={{
          scale: 1.5,
          // backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          // transition:{duration:1, repeat: Infinity}
        }}
      >
        MiniFit.co
      </MotionLink>
    </div>
  );
};

export default Logo;
