import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useSelector } from 'react-redux';

function Navbar() {

  const {cart} = useSelector((state) => state);
  return (
   <div className=' bg-slate-900 text-white h-14 items-center pt-2.5'>
     <div className=' flex flex-row justify-between  max-w-6xl mx-auto items-center align-middle '>
       <NavLink to ="/">
       <div className='ml-5'> <img src={logo} width={100} height={100}/></div>
         </NavLink>
        <div className='flex flex-row gap-7 items-center text-slate-100  text-xl'>
            <NavLink to="/">
                <div>Home</div>
            </NavLink>
           <NavLink to="/cart">
  <div className="relative">
    <MdShoppingCart />
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-green-600 text-xs text-white rounded-full w-5 h-5 flex justify-center items-center animate-bounce">
        {cart.length}
      </span>
    )}
  </div>
</NavLink>
        </div>
    </div>
   </div>
  )
}

export default Navbar