import { useState } from "react";
export default function Checkout({ cart = [] }) {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const Naira = "₦";


  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  const updateField = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppOrder = () => {
    if (!details.name || !details.phone || !details.address) {
      alert("Please fill in all fields before placing an order.");
      return;
    }

    const orderText = cart
      .map(
        (item) =>
          `${item.name} x${item.qty || 1} = ${Naira}${(item.price || 0) * (item.qty || 1)}`
      )
      .join("\n");

    const message = `
Hello, I want to place an order:

Name: ${details.name}
Phone: ${details.phone}
Address: ${details.address}

Order:
${orderText}

Subtotal: ${Naira}${subtotal}
Shipping: ${Naira}${shipping}
Total: ${Naira}${total}
    `;

    const phoneNumber = "09094017672";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto px-5 pb-20">
      <h1 className="text-4xl font-bold text-center mb-10">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">

       
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Customer Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            value={details.name}
            onChange={updateField}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
            value={details.phone}
            onChange={updateField}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            className="w-full p-3 border rounded-lg"
            rows={4}
            value={details.address}
            onChange={updateField}
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p>
                  {item.name} x{item.qty || 1}
                </p>
                <p>
                  {Naira}
                  {((item.price || 0) * (item.qty || 1)).toLocaleString()}
                </p>
              </div>
            ))
          )}

          <hr />

          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {Naira}
              {subtotal.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between">
            <p>Shipping</p>
            <p>
              {Naira}
              {shipping.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between font-bold text-xl">
            <p>Total</p>
            <p className="text-green-600">
              {Naira}
              {total.toLocaleString()}
            </p>
          </div>

        
          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
          >
            Order via WhatsApp
          </button>

          <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-300">
            <h3 className="font-bold text-orange-700 text-lg">
              Pay with OPay Transfer
            </h3>

            <p className="mt-2">
              <strong>Bank:</strong> OPay (Paycom)
            </p>
            <p>
              <strong>Account Name:</strong> Your Account Name
            </p>
            <p>
              <strong>Account Number:</strong> 1234567890
            </p>
            <p className="mt-2">
              <strong>Amount to Pay:</strong> {Naira}
              {total.toLocaleString()}
            </p>

            <p className="text-sm mt-3 text-gray-600">
              After payment, send your proof of payment to WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
