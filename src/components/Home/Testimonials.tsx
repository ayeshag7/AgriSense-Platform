import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Before AgriSense, I lost over 20% of my wheat to rust every season. Now I get early alerts and treatment tips just from a photo — it's a game changer.",
    name: "Ahmed Raza",
    designation: "Wheat Farmer, Sargodha",
    src: "/images/ahmed.png",
  },
  {
    quote:
      "The yield estimation tool helped me plan my tomato harvest with buyers weeks ahead. AgriSense brings clarity to farming decisions.",
    name: "Shazia Khalid",
    designation: "Tomato Grower, Multan",
    src: "/images/shazia.png",
  },
  {
    quote:
      "I was skeptical, but the disease timeline and report download saved my field from spreading leaf blight. I trust AgriSense’s insights now.",
    name: "Irfan Malik",
    designation: "Rice Farmer, Thatta",
    src: "/images/irfan.png",
  },
  {
  quote:
    "With AgriSense’s PDF reports, I can finally show local advisors what's really happening in my fields. It’s helped me get better support and funding.",
  name: "Nabila Yousuf",
  designation: "Cotton Farmer, Bahawalpur",
  src: "/images/nabila.png",
}
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white text-black py-16">
      <h2 className="text-center text-4xl font-bold mb-12">
        Trusted by Farmers Across Pakistan
      </h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
