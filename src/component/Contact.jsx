import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="mt-24 px-6 pb-20 max-w-5xl mx-auto">

      {/* HEADER SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact <span className="text-orange-600">Us</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          We’re here to help, guide, and bring deliciousness to your doorstep.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* CONTACT INFO CARD */}
          <div className="bg-white rounded-xl shadow-lg p-7 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>

            <div className="space-y-3 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <Phone className="text-orange-600" /> 
                09094017672, 08145808257
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-orange-600" /> 
                hauwashehub@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-orange-600" /> 
                Kano State, Nigeria
              </p>
              <p className="flex items-center gap-3">
                <Clock className="text-orange-600" /> 
                Mon – Sat: 9am – 6pm
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-5">
              <a className="text-orange-600 hover:text-orange-500 transition flex items-center gap-1" href="#">
                <Instagram size={20} /> Instagram
              </a>

              <a className="text-orange-600 hover:text-orange-500 transition flex items-center gap-1" href="#">
                <Facebook size={20} /> Facebook
              </a>

              <a className="text-orange-600 hover:text-orange-500 transition flex items-center gap-1" href="#">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Quick Order</h2>

            <a
              href="https://wa.me/2349121835407"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white py-4 rounded-xl text-xl font-semibold shadow-lg hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle /> Chat with Us on WhatsApp
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-white p-7 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            ></textarea>

            <button className="bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition shadow-md">
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
