"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // === 496 Billion stat block: fade in early, fade out before rings ===
  const statOpacity = useTransform(scrollYProgress, [0.01, 0.10, 0.14], [0, 1, 0]);

  // === Ring appearances (show and hold) ===
  const ring1Opacity = useTransform(scrollYProgress, [0.07, 0.68], [0, 1]);
  const ring2Opacity = useTransform(scrollYProgress, [0.20, 0.68], [0, 1]);
  const ring3Opacity = useTransform(scrollYProgress, [0.35, 0.68], [0, 1]);
  const ring4Opacity = useTransform(scrollYProgress, [0.55, 0.68], [0, 1]);

  // === Fade out all rings right before image
  const ringFadeOut = useTransform(scrollYProgress, [0.735, 0.745], [1, 0]);

  // === Image fade in ===
  const imageOpacity = useTransform(scrollYProgress, [0.735, 0.745], [0, 1]);

  return (
    <section ref={containerRef} className="w-full bg-black">
      <div className="h-[500vh] relative">

        {/* === STAT BLOCK === */}
        <motion.div
          style={{ opacity: statOpacity }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none"
        >
          <h1 className="text-7xl text-white font-bold leading-tight">
            <span style={{ color: "#64FF64" }}>496</span>
            <span className="text-white"> Billion</span>
          </h1>
          <p className="text-white mt-2 text-sm sm:text-base">
            lost annually due to post-harvest crop waste
          </p>
        </motion.div>

        {/* === RINGS === */}
        <motion.div
          style={{ opacity: ring1Opacity, scale: ringFadeOut }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-[20rem] h-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-400 z-10 pointer-events-none"
        />
        <motion.div
          style={{ opacity: ring2Opacity, scale: ringFadeOut }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-[48rem] h-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500 z-10 pointer-events-none"
        />
        <motion.div
          style={{ opacity: ring3Opacity, scale: ringFadeOut }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-600 z-10 pointer-events-none"
        />
        <motion.div
          style={{ opacity: ring4Opacity, scale: ringFadeOut }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-[90rem] h-[90rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-700 z-10 pointer-events-none"
        />

        {/* === FINAL IMAGE === */}
        <div className="absolute top-[400vh] w-full h-screen z-20">
          <motion.div
            style={{ opacity: imageOpacity }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <img
              src="/images/fact-image.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Post Harvest Waste"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-10 left-10 text-white max-w-xl z-30">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
              >
                Every Missed Diagnosis Costs Millions
              </h2>
              <p
                className="text-base"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                Post-harvest losses in key Pakistani crops exceed Rs 496 billion annually.
                AgriSense helps prevent this by identifying diseases early, tracking crop health over time,
                and guiding precise interventions that preserve yields.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
