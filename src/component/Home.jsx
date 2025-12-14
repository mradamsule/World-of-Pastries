import TextType from "../animations/TextType";
import ImagePast from "../assets/Imagepast.jpeg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          
     
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-orange-600 font-semibold tracking-wide"
          >
            Fresh • Tasty • Delivered
          </motion.p>

        
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Welcome to the World of{" "}
            <TextType
              text={["Pastriest!", "Chops!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.h1>

      
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-gray-800"
          >
            Delicious Meals Delivered to Your Door
          </motion.h2>

        
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Explore our handcrafted pastries, freshly baked daily using the finest ingredients.
            Experience mouth-watering flavors with fast and reliable delivery — right to your home.
          </motion.p>

        
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 mt-6"
          >
            <a
              href="/menu"
              className="bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold text-lg 
              shadow-md hover:bg-orange-500 hover:shadow-lg transition-all"
            >
              Order Now
            </a>

            <a
              href="/contact"
              className="border-2 border-orange-600 text-orange-600 px-7 py-3 rounded-lg font-semibold text-lg 
              hover:bg-orange-50 transition-all"
            >
              Contact Us
            </a>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-10 pt-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Fresh Pastries Daily</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={ImagePast}
            alt="Pastries"
            className="rounded-2xl shadow-lg w-full md:w-[95%] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
