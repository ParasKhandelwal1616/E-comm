import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../Components/CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-md h-fit">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <p className="text-gray-600 mb-2">Total Items: <span className="font-medium">{cart.length}</span></p>
              <p className="text-gray-600 mb-4">Total Amount: <span className="font-medium text-lg text-green-700">₹{totalAmount.toFixed(2)}</span></p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
