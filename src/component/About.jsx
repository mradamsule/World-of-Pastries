import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";

export default function About() {
  return (
    <div className="min-h-screen py-20 max-w-6xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mt-10">
        About <span className="text-orange-600">World of Pastries</span>
      </h1>
      <p className="text-center text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Crafting delicious, healthy, and beautifully presented meals since 2021
        — delivered with passion and excellence.
      </p>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mt-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <strong>World of Pastries</strong>, we believe in the magic of
            great food. Our journey started in a cozy kitchen in 2021, fueled by
            a dream to bring fresh, delicious, and visually perfect meals right
            to your doorstep.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            What began as a small home project has grown into a trusted culinary
            brand, serving hundreds of satisfied customers who enjoy our
            pastries, meals, and freshly inspired creations daily.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Every dish reflects passion, creativity, and dedication all
            blended to create a unique culinary journey for our customers.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={Hero2}
            alt="Our Kitchen"
            className="rounded-xl shadow-xl w-full  object-cover"
          />
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-2xl text-orange-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg">
              To deliver mouth-watering meals and pastries made with natural,
              healthy ingredients ensuring freshness, delight, and exceptional
              customer satisfaction with every single bite.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-2xl text-orange-600 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg">
              To become a leading brand known for quality, creativity, and
              irresistible culinary experiences loved locally and recognized
              globally for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Business Insights */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
          Business Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            title="The Ultimate Customer Experience"
            text="We deliver a culinary experience that mixes natural, healthy, and flavorful meals — ensuring every customer leaves satisfied and eager to return."
          />

          <InfoCard
            title="Our Unique Selling Proposition"
            text="Our dedication and commitment reduce stress for customers by offering personalized, 24/7 services — delivered right to their doorstep."
          />

          <InfoCard
            title="Commitment to Quality"
            text="With professional culinary techniques and natural preservation methods, we ensure freshness, quality, and consistency in every order — big or small."
          />
        </div>
      </section>

      {/* Chef Advantage */}
      <section className="flex flex-col md:flex-row items-center gap-10 mt-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            The Chef Advantage
          </h2>

          <p className="text-gray-600 text-lg">
            Behind every dish is a skilled chef with a passion for creating
            visually stunning and delicious meals.
          </p>

          <p className="text-gray-600 text-lg">
            With experience as a Demonstration Chef and Food Content Creator,
            every recipe is carefully curated to meet professional standards
            ensuring every meal is not only tasty but also Instagram-worthy.
          </p>

          <p className="text-gray-600 text-lg">
            Whether catering events or teaching pastry classes, our chef brings
            modern techniques and artistic flair to every culinary creation.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={Hero1}
            alt="Chef advantage"
            className="rounded-xl shadow-xl w-[300px] object-cover"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24 pb-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Testimonial
            name="Sarah Johnson"
            text="The pastries are always fresh, beautifully crafted, and delivered warm! Definitely my go-to brand for treats and brunch orders."
          />
          <Testimonial
            name="Michael Ade"
            text="World of Pastries catered my event and the guests were blown away. Amazing presentation and delicious taste!"
          />
          <Testimonial
            name="Fatima Yusuf"
            text="I love the consistency! Every meal I order tastes fantastic. You can feel the passion behind every recipe."
          />
        </div>
      </section>
    </div>
  );
}

/* ----- Reusable Components ----- */

function InfoCard({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <h3 className="font-semibold text-xl text-orange-600 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg">{text}</p>
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
