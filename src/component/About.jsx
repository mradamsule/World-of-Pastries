import { motion } from "framer-motion";
import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-0 md:max-w-6xl mx-auto">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-gray-900 text-center mt-10"
      >
        About <span className="text-orange-600">World of Pastries</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto"
      >
        Crafting delicious, healthy, and beautifully presented meals since 2020
        — delivered with passion and excellence.
      </motion.p>

      <section className="flex flex-col md:flex-row items-center gap-10 mt-16">
        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Story
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <strong>World of Pastries</strong>, we believe in the magic of
            great food. Our journey started in a cozy kitchen in 2020, fueled by
            a dream to bring fresh, delicious, and visually perfect meals right
            to your doorstep.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            What began as a small home project has grown into a trusted culinary
            brand, serving hundreds of satisfied customers daily.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every dish reflects passion, creativity, and dedication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={Hero2}
            alt="Our Kitchen"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              text: "To deliver mouth-watering meals and pastries made with natural, healthy ingredients ensuring freshness and customer satisfaction.",
            },
            {
              title: "Our Vision",
              text: "To become a leading culinary brand known for creativity, quality, and unforgettable food experiences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="font-bold text-xl md:text-2xl text-orange-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10"
        >
          Business Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Experience",
              text: "We create memorable culinary experiences using natural and flavorful meals.",
            },
            {
              title: "Unique Selling Point",
              text: "Personalized services with stress-free delivery to your doorstep.",
            },
            {
              title: "Quality Commitment",
              text: "Professional culinary techniques ensure consistency and excellence.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <InfoCard title={card.title} text={card.text} />
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="flex flex-col md:flex-row items-center gap-10 mt-20">
        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            The Chef Advantage
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            Behind every dish is a skilled chef with passion for creativity.
          </p>

          <p className="text-gray-600 text-base md:text-lg">
            Experience as a Demonstration Chef and Food Content Creator ensures
            professional standards and stunning presentation.
          </p>

          <p className="text-gray-600 text-base md:text-lg">
            From events to classes, every creation is crafted with flair.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={Hero1}
            alt="Chef advantage"
            className="rounded-xl shadow-xl w-full max-w-sm object-cover"
          />
        </motion.div>
      </section>

      <section className="mt-24 pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Testimonial
            name="Rahma"
            text="The pastries are always fresh, beautifully crafted, and delivered warm!"
          />
          <Testimonial
            name="Khadija Ahmad"
            text="World of Pastries catered my event and everyone loved it!"
          />
          <Testimonial
            name="Fatima Yusuf"
            text="Every meal tastes amazing. You can feel the passion!"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <h3 className="font-semibold text-lg md:text-xl text-orange-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-base md:text-lg">{text}</p>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
      <p className="text-gray-600 italic mb-4">“{text}”</p>
      <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
    </div>
  );
}
