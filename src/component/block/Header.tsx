// import React from 'react'
import { useState } from "react";
import logo from "../../assets/IMG2/Screenshot_2026-11-10_115151-removebg-preview.png"
import { ImCancelCircle, ImMenu3 } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [show, setShow] = useState<boolean | null>(null);

    const dropdown = () => {
        setShow(!show)
    }


  return (
    <div className=" fixed top-0 left-0 w-full h-20 z-50 flex justify-center items-center bg-green-800">
      <div className="w-[90%] h-[90%] flex justify-between items-center">
        <div><img src={logo} className=" lg:w-50 w-40 " alt="" /></div>
        <div className="lg:flex hidden items-center gap-10 text-white font-medium text-[20px]">
            <NavLink to="/">
                <div className="hover:text-green-400 cursor-pointer">Home</div>
            </NavLink>
            <a href="/#about">
            <div className="hover:text-green-400 cursor-pointer">About</div>
            </a>
             <a href="/#showcase">
            <div className="hover:text-green-400 cursor-pointer">Our Menu</div>
            </a>
            <a href="/#review">
            <div className="hover:text-green-400 cursor-pointer">Customer Reviews</div>
            </a>
            <a href="/#order">
            <div className="hover:text-green-400 cursor-pointer">Order Now</div>
            </a>
            <NavLink to="/contact">
            <div className="hover:text-green-400 cursor-pointer">Contact</div>
            </NavLink>
        </div>
        <div className=" flex lg:hidden">
      { show ? (
    <div  className="text-2xl text-white font-bold">

     <ImCancelCircle  onClick={dropdown}/>
  </div>
  ) : (
  <div className="text-2xl text-white font-bold">
           <ImMenu3  onClick={dropdown}/>
  </div>
  )}
  {
     show ?(
        <div className="  w-70 absolute h-80 flex flex-col justify-center gap-4 text-2xl text-white bg-green-800 top-19 pl-10 right-0 items-start">
            <NavLink to="/">
                <div className="hover:text-green-400 cursor-pointer">Home</div>
            </NavLink>
            <a href="/#about" onClick={() => setShow(false)}>
            <div className="hover:text-green-400 cursor-pointer">About</div>
            </a>
             <a href="/#showcase" onClick={() => setShow(false)}>
            <div className="hover:text-green-400 cursor-pointer">Our Menu</div>
            </a>
            <a href="/#review" onClick={() => setShow(false)}>
            <div className="hover:text-green-400 cursor-pointer">Customer Reviews</div>
            </a>
            <a href="/#order" onClick={() => setShow(false)}>
            <div className="hover:text-green-400  cursor-pointer">Order Now</div>
            </a>
            <NavLink to="/contact">
            <div className="hover:text-green-400 cursor-pointer">Contact</div>
            </NavLink>
        </div>
    )
    :
    null
  }
  </div>
      </div>
    </div>
  );
};


export default Header;
