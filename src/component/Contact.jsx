export default function Contact() {
  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
        <p><strong>Phone:</strong>09094017672, 08145808257</p>
        <p><strong>Email:</strong> hauwashehub@gmail.com</p>
        <p><strong>Address:</strong>Kano State</p>
        <p><strong>Hours:</strong> Mon–Sat: 9am — 6pm</p>

        <div className="flex gap-4 mt-4">
          <a className="text-blue-600 hover:underline" href="#">Instagram</a>
          <a className="text-blue-600 hover:underline" href="#">Facebook</a>
          <a className="text-blue-600 hover:underline" href="#">WhatsApp</a>
        </div>
      </div>

        <div>
          <h1 className="text-3xl font-bold text-center mb-6">For quick order</h1>
          <a
        href="https://wa.me/2349121835407"   
        target="_blank"
        rel="#"
        className="block bg-green-600 text-white py-4 rounded-xl text-xl font-semibold shadow hover:bg-green-700 transition"
      >
        💬 Chat with Us on WhatsApp
      </a>
        </div>
     
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Your Message" rows="5" className="p-3 border rounded"></textarea>
          <button className="bg-orange-600 text-white py-2 rounded hover:bg-orange-500">
            Send Message
          </button>
        </form>
      </div>
      
       
    </div>
  );
}
