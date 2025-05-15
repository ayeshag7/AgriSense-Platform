"use client";

import { motion } from "framer-motion";
import TorusCanvas from "../ui/TorusCanvas";

export default function HeroSection() {
  return (
    <div className="relative h-96 md:h-[calc(100vh-80px)] w-full bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center">

        {/* Left: Hero Image */}
       <div className="hidden md:flex justify-center w-[500px] h-[500px]">
          <TorusCanvas/>
        </div>


        {/* Right: Animated Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl text-white font-bold mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Smart Farming Starts Here
          </motion.h1>
          <motion.p
            className="text-sm text-gray-100 max-w-md"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Empowering farmers with <span className="text-[#ebad01]">AI-driven insights</span> for crop health monitoring and yield prediction — all through a simple image.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
