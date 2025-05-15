"use client";

import { Carousel } from "../ui/carousel";

export default function CardsSection() {

    const slides = [
  {
    title: "Day 1 – Severity: High",
    button: "View Details",
    src: "/images/timeline-day1.png",
  },
  {
    title: "Day 3 – Severity: Moderate",
    button: "View Details",
    src: "/images/timeline-day3.png",
  },
  {
    title: "Day 7 – Severity: Low",
    button: "View Details",
    src: "/images/timeline-day7.png",
  },
  {
    title: "Recovered – Healthy",
    button: "View Timeline",
    src: "/images/timeline-recovered.png",
  },
];


  return (
    <section className="flex flex-col w-full bg-white pt-10 pb-20">
      <h1 className="text-5xl text-black font-bold px-4 pt-6 pb-12">
        Built for Real-World Impact
      </h1>

      <div
        className="relative w-full overflow-x-auto px-4 scrollbar-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-x-4 min-w-[100%] w-max">
          
          {/* ✅ Card 1 */}
            <div className="relative w-[484px] h-[568px] rounded-lg overflow-hidden shadow-md">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/card1-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Text overlay - top left */}
            <div className="absolute z-10 inset-0 bg-black/30 p-6 text-white text-shadow-2xs flex flex-col items-start justify-start">
                <h2 className="text-2xl font-bold mb-2">Early Detection, Real Results</h2>
                <p className="text-sm text-gray-200 max-w-[90%]">
                AgriSense uses deep learning to detect crop diseases like Leaf Blight or Rust from field images — enabling farmers to act before damage spreads.
                </p>
            </div>
            </div>


          {/* ✅ Card 2 */}
            <div className="relative w-[484px] h-[568px] rounded-lg overflow-hidden shadow-md bg-black border border-gray-700 p-4 flex flex-col">
            {/* Text */}
            <div className="z-10 text-white">
                <h2 className="text-2xl font-bold mb-2">Your Crop’s Health, Tracked Over Time</h2>
                <p className="text-sm text-gray-300">
                Group multiple images of the same field into a visual timeline. See how disease severity changes after treatment, with clear before-and-after comparisons and confidence scores.
                </p>
            </div>

            {/* Carousel */}
            <div className="mt-12 flex justify-center">
                <Carousel slides={slides} />
            </div>
            </div>

          
          {/* ✅ Card 3 */}
            <div className="relative w-[484px] h-[568px] rounded-lg overflow-hidden shadow-md">
            {/* Background image */}
            <img
                src="/images/card3-image.png"
                alt="Wheat crop yield estimation"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Optional dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Text overlay - top-left */}
            <div className="absolute z-10 inset-0 p-6 text-white text-shadow-2xs flex flex-col items-start justify-start">
                <h2 className="text-2xl font-bold mb-2">Harvest Forecasting Made Smarter</h2>
                <p className="text-sm text-gray-200 max-w-[90%]">
                Our object detection models count yield-related structures like wheat heads or tomato fruits with high accuracy — helping you plan, sell, and scale.
                </p>
            </div>
            </div>

            {/* ✅ Card 4 */}
              <div className="relative w-[484px] h-[568px] rounded-lg overflow-hidden shadow-md bg-black border border-gray-700 p-4 flex flex-col">
                {/* Text */}
                <div className="z-10 text-white">
                  <h2 className="text-2xl font-bold mb-2">Instant Reports. Smarter Decisions.</h2>
                  <p className="text-sm text-gray-300">
                    Generate PDF reports with disease insights, treatment tips, and QR tracking — all surfaced instantly by AgriSense.
                  </p>
                </div>

                {/* Centered Video */}
                <div className="mt-12 flex justify-center">
                  <video
                    src="/videos/report-insights.mp4"
                    className="w-96 h-auto rounded-xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

        </div>
      </div>
    </section>
  );
}
