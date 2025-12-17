import Small from "../assets/Small chops.jfif";
import Samosa from "../assets/samosa.jfif";
import Chicken from "../assets/CHICKEN.jfif";
import Fried from "../assets/fried.jfif";
import Cake from "../assets/cakes.jfif";
import Milky from "../assets/Milky.jfif";
import ImageCard from "./imageCard";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-gray-50 pb-10 pt-10">

     
      <div className="text-center py-16 bg-gradient-to-r from-orange-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl text-gray-900"
        >
          Our <span className="text-orange-600">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 text-lg max-w-xl mx-auto"
        >
          We offer a delicious blend of catering, pastries, and creative food
          services tailored to your events, cravings, and lifestyle.
        </motion.p>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 mt-9">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-10"
        >
          What We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FIRST CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-orange-600 mb-4 text-center"
            >
              Premium Culinary Services.
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between space-y-3 md:text-sm text-gray-700 text-lg text-center"
            >
              <li>✔ Event Catering</li>
              <li>✔ Food Content Creation</li>
              <li>✔ Pastry & Baking Classes</li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600 text-center"
            >
              Whether it's a wedding, corporate event, or private celebration — we
              handle everything with professionalism and flavor.
            </motion.p>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-orange-600 mb-4 text-center"
            >
              Quick Bites & Special Orders
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between space-y-3 text-gray-700 text-lg text-center"
            >
              <li>✔ Small Chops</li>
              <li>✔ Grills</li>
              <li>✔ Mocktails</li>
              <li>✔ Lunch Packs</li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600 text-center"
            >
              Perfect for office meetings, casual hangouts, parties, or on-the-go meals.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-15 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-8"
        >
          Why Choose Us?
        </motion.h2>

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

      
      <div className="max-w-6xl mx-auto mt-15 px-4">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-8"
        >
          Some of Our Work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatedImage><ImageCard src={Small} alt="Small chops" /></AnimatedImage>
          <AnimatedImage><ImageCard src={Chicken} alt="Chicken" /></AnimatedImage>
          <AnimatedImage><ImageCard src={Samosa} alt="Samosa" /></AnimatedImage>
          <AnimatedImage><ImageCard src={Fried} alt="Fried Rice" /></AnimatedImage>
          <AnimatedImage><ImageCard src={Cake} alt="Cake" /></AnimatedImage>
          <AnimatedImage><ImageCard src={Milky} alt="Milkydoughnut" /></AnimatedImage>
        </div>
      </div>
    </div>
  );
}


function WhyUsCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white p-7 rounded-xl shadow hover:shadow-xl text-center transition"
    >
      <h3 className="font-semibold text-xl text-orange-600 mb-3">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}


function AnimatedImage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
