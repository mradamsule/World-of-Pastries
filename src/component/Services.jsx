import Small from "../assets/Small chops.jfif";
import Samosa from "../assets/samosa.jfif";
import Chicken from "../assets/Chicken.jfif";
import Fried from "../assets/fried.jfif";
import Cake from "../assets/cakes.jfif";
import Milky from "../assets/Milky.jfif";
import ImageCard from "./imageCard";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-gray-50 pb-10 pt-10">

      {/* HERO HEADER */}
      <div className="text-center py-16 bg-gradient-to-r from-orange-50 to-white">
          <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
         className="font-bold text-4xl md:text-5xl text-gray-900">
          Our <span className="text-orange-600">Services</span>
         </motion.h1>
          <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          We offer a delicious blend of catering, pastries, and creative food services tailored to your events, cravings, and lifestyle.
        </motion.p>
      </div>

      {/* SERVICES LIST */}
      <div className="max-w-6xl mx-auto px-4 mt-9">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left block */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-600 mb-4 text-center">
              Premium Culinary Services
            </h3>
            <ul className=" flex flex-col md:flex-row justify-between space-y-3 text-gray-700 text-lg text-center">
              <li>✔ Event Catering</li>
              <li>✔ Food Content Creation</li>
              <li>✔ Pastry & Baking Classes</li>
            </ul>
            <p className="mt-4 text-gray-600 text-center">
              Whether it's a wedding, corporate event, or private celebration — we handle everything with professionalism and flavor.
            </p>
          </div>

          {/* Right block */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-600 mb-4 text-center">
              Quick Bites & Special Orders
            </h3>
            <ul className="flex flex-col md:flex-row justify-between space-y-3 text-gray-700 text-lg text-center">
              <li>✔ Small Chops</li>
              <li>✔ Grills</li>
              <li>✔ Mocktails</li>
              <li>✔ Lunch Packs</li>
            </ul>
            <p className="mt-4 text-gray-600 text-center">
              Perfect for office meetings, casual hangouts, parties, or on-the-go meals — freshly prepared and delivered fast.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-6xl mx-auto mt-15 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <WhyUsCard
            title="High Quality Ingredients"
            text="We use fresh, natural and premium ingredients to craft meals that are both healthy and delicious."
          />
          <WhyUsCard
            title="Professional Preparation"
            text="Every dish is carefully prepared by trained culinary professionals with years of experience."
          />
          <WhyUsCard
            title="Fast & Reliable Delivery"
            text="Enjoy timely delivery to your home, office, or event — without compromising taste or freshness."
          />
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-6xl mx-auto mt-15 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Some of Our Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ImageCard src={Small} alt="Small chops" />
          <ImageCard src={Chicken} alt="Chicken" />
          <ImageCard src={Samosa} alt="Samosa" />
          <ImageCard src={Fried} alt="Fried Rice" />
          <ImageCard src={Cake} alt="Cake" />
          <ImageCard src={Milky} alt="Milkydoughnut" />
        </div>
      </div>
    </div>
  );
}

/* ------ REUSABLE COMPONENT ------- */

function WhyUsCard({ title, text }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow hover:shadow-xl text-center transition">
      <h3 className="font-semibold text-xl text-orange-600 mb-3">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
