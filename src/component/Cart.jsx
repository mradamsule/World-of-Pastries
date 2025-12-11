import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function Cart({ cart, setCart }) {
  const NairaSign = "₦";

  // Ensure each item has a quantity
  const updatedCart = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  // Increment quantity
  const increment = (index) => {
    const newCart = [...updatedCart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  // Decrement quantity
  const decrement = (index) => {
    const newCart = [...updatedCart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      // Remove if quantity reaches 0
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  // Remove item
  const removeFromCart = (index) => {
    const newCart = [...updatedCart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Calculate totals
  const subtotal = updatedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="mt-24 max-w-6xl mx-auto px-5 pb-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Your <span className="text-orange-600">Cart</span>
      </h1>

      {updatedCart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg bg-white p-10 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="empty-cart"
            className="w-40 mx-auto mb-5 opacity-70"
          />
          <p>Your cart is empty.</p>
          <a
            href="/menu"
            className="mt-5 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition shadow"
          >
            Browse Menu
          </a>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE: Cart Items */}
          <div className="md:w-2/3 max-h-[70vh] overflow-y-auto space-y-4 pr-2">
            {updatedCart.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex justify-between items-center gap-4"
              >
                {/* Image & Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-orange-600 font-bold">
                      {NairaSign}
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center md:ml-55 gap-2">
                  <button
                    onClick={() => decrement(index)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => increment(index)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:text-red-500 transition"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Summary */}
          <div className="md:w-1/3 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 h-fit sticky top-32">
            <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>

            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>
                {NairaSign}
                {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>
                {NairaSign}
                {shipping.toLocaleString()}
              </span>
            </div>

            <div className="border-t border-gray-300 pt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-green-600">
                {NairaSign}
                {total.toLocaleString()}
              </span>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-500 transition shadow-md mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
