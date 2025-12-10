import Samosa from '../assets/samosa.jfif';
import Chicken from '../assets/Chicken.jfif';
import Milky from '../assets/Milky.jfif';
import Doughnut from '../assets/Doughnut.jfif';

export default function Menu({ addToCart }) {
  const NairaSign = '₦';

  const menuItems = [
    { name: "Samosa Pack", price: 3500, image: Samosa, desc: "Crispy, tasty, and perfectly spiced." },
    { name: "Chicken Wing Pack", price: 5000, image: Chicken, desc: "Juicy grilled wings with bold flavor." },
    { name: "Plain Doughnuts (Pack)", price: 1500, image: Doughnut, desc: "Soft, fluffy and freshly made." },
    { name: "Milk-Coated Doughnuts", price: 2000, image: Milky, desc: "Sweet, creamy, and irresistible." },
  ];

  return (
    <div className="mt-28 px-5 pb-20">

      {/* Heading */}
      <h1 className="font-bold text-4xl text-center mb-12 text-gray-900">
        Savory <span className="text-orange-600">Delights</span>
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >

            {/* IMAGE WRAPPER */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-5 text-center">

              {/* Item Name */}
              <p className="font-bold text-lg text-gray-800 mb-1">{item.name}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              {/* Price */}
              <p className="font-bold text-orange-600 mb-5 text-xl">
                {NairaSign}{item.price.toLocaleString()}
              </p>

              {/* Button */}
              <button
                className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold 
                hover:bg-orange-500 transition-all shadow-sm hover:shadow-md"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
