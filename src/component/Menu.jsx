import Samosa from '../assets/samosa.jfif';
import Chicken from '../assets/Chicken.jfif';
import Milky from '../assets/Milky.jfif';
import Doughnut from '../assets/Doughnut.jfif';

export default function Menu({ addToCart }) {
  const NairaSign = '₦';

  const menuItems = [
    { name: "Samosa Pack", price: 3500, image: Samosa },
    { name: "Chicken Wing Pack", price: 5000, image: Chicken },
    { name: "Plain Doughnuts (Pack)", price: 1500, image: Doughnut },
    { name: "Milk-Coated Doughnuts", price: 2000, image: Milky },
  ];

  return (
    <div className="mt-25">
      <h1 className="font-bold text-3xl text-center mb-8">Savory Delights</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mx-5">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <p className="font-bold text-center mb-2">{item.name}</p>

            <p className="font-bold text-center mb-4">
              <span>{NairaSign}</span>{item.price.toLocaleString()}
            </p>

            <button
              className="bg-red-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-red-500 transition"
              onClick={() => addToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
