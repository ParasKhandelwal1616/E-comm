import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../Redux/Slice/CartSlice';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

export default function Product({ post }) {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const ADDTOCart = () => {
        dispatch(add(post));
        toast.success("Item Added to Cart");
    };

    const RemoveFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    };

    const words = post.description.split(' ');
    const isLong = words.length > 50;
    const shortDesc = words.slice(0, 50).join(' ') + (isLong ? '...' : '');

    return (
        <div className="flex flex-col justify-between bg-white rounded-3xl shadow-xl hover:shadow-xl/30 hover:scale-[1.03] transition-all duration-300 p-6 w-80 h-[460px]">
            <div className="text-lg font-semibold text-gray-800 mb-3 text-center line-clamp-2">
                {post.title}
            </div>

            <div className="text-sm text-gray-600 mb-3 h-24 overflow-hidden">
                <p>
                    {expanded || !isLong ? post.description : shortDesc}
                    {isLong && (
                        <button
                            className="ml-2 text-blue-600 hover:text-blue-800 underline text-xs"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? 'Show Less' : 'Read More'}
                        </button>
                    )}
                </p>
            </div>

            <div className="flex justify-center items-center mb-4 h-36">
                <img
                    src={post.image}
                    alt={post.title}
                    className="max-h-full object-contain"
                />
            </div>

            <div className="flex justify-between items-center">
                <p className="text-base font-bold text-gray-800">₹{post.price}</p>

                {cart.some((p) => p.id === post.id) ? (
                    <button
                        onClick={RemoveFromCart}
                        className="text-sm px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium border border-red-300 hover:bg-red-200 transition"
                    >
                        Remove Item
                    </button>
                ) : (
                    <button
                        onClick={ADDTOCart}
                        className="text-sm px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium border border-green-300 hover:bg-green-200 transition"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}
