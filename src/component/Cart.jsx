export default function Cart({ cart,  }) {
  const NairaSign = "₦";

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-10 mx-5">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-5">
          {cart.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="font-bold">{NairaSign}{item.price.toLocaleString()}</p>
                </div>
              </div>

              <button 
                className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">
              Total: {NairaSign}{total.toLocaleString()}
            </h2>

            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
