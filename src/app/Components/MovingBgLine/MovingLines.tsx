'use client';
import { motion } from "framer-motion";

const MovingLines = () => {
  return (
    <motion.div
      animate={{ x: ["0%", "10%", "0%"] }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }}
      className="h-full absolute z-10 top-0 grid grid-cols-4  md:grid-cols-9 w-full items-center"
    >
      <div className=" w-full h-full border-l-[1.2px] border-gray-500 border-opacity-30"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
      <div className=" h-full border-l-[1.2px] border-gray-500 border-opacity-20"></div>
    </motion.div>
  );
};

export default MovingLines;
