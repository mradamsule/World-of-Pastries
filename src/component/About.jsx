import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mt-10">
        About Us
      </h1>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 m-10">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Story</h2>
          <p className="text-gray-600 text-lg">
            At World of Passteries, we believe that food brings people together.
            From fresh ingredients to delicious recipes, our mission is to
            deliver high-quality meals that satisfy your taste buds and warm
            your heart.
          </p>
          <p className="text-gray-600 text-lg">
            Founded in 2021, we started with a small kitchen and a big dream: to
            make delicious meals accessible to everyone, right at their
            doorstep. Today, we serve hundreds of happy customers and continue
            to grow with love for food.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={Hero2}
            alt="Our Kitchen"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

    
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We use only the freshest ingredients to create meals full of flavor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">Quality Service</h3>
            <p className="text-gray-600">
              Fast delivery and excellent customer service is our priority.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">Passion for Food</h3>
            <p className="text-gray-600">
              We cook with love and passion to make every meal memorable.
            </p>
          </div>
        </div>
      </section>

      
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our Core Business Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">The Ultimate Customer Experience</h3>
            <p className="text-gray-600">
              To deliver a culinary experience that is a perfect mixture of natural,Healthy, and delicious flavors.<br/>
              The confidence that the food will impress clients enough to foster continue loyalty and patronage.<br/>
              
    
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">The Unique Selling Proposition culinary dedication</h3>
            <p className="text-gray-600">
              Unwavering dedication and the commitment of reducing stress for clients.<br/>
              How it's delivered: By offering personalized services 24/7, right at the customer's doorstep. 
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2">Commitment to qaulity</h3>
            <p className="text-gray-600">
              As a Skilled Chef, i utilize expertise in natural preservation technique to ensure every offering 
              (whether it's an event spread or a single lunch pack) maintains its peak quality and freshness, regardless
              of the time of day it's delevered.
            The goal is to earn trust-the most valuable from of success is when client recommend world of pasteries to others.<br/>

            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10 m-10 md:ml-40">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">The Chef Advantage</h2>
          <p className="text-gray-600 text-lg">
            The Chef's Advantage: The Visual and Delicious Blend
          </p>
          <p className="text-gray-600 text-lg">
Source of Skills: A foundational passion for cooking.
Professional Edge: Serving as a Demonstration Chef and Food Content Creator ensures that every recipe and dish is not just delicious, but is also visually stunning and professionally executed.
Benefit to Clients: Whether it's a catering event or a pastry class, clients are guaranteed trendy, high-quality, and photogenic food that is created with expert skill and media awareness.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={Hero1}
            alt="Our Kitchen"
            className="rounded-xl shadow-lg md:w-[60%] h-[20%]"
          />
        </div>
      </section>

    </div>
  );
}
