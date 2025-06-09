import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slice/CartSlice';
import { toast } from 'react-toastify';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const RemoveCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed from Cart");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-contain rounded-xl border"
      />
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-green-700 font-medium text-base">₹{item.price}</p>
          <button
            onClick={RemoveCart}
            className="text-red-500 hover:text-red-700 p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
            title="Remove"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
