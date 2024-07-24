'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaOpencart } from "react-icons/fa";
import HeroBanner from '@/components/heroBanner';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '@/store/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import toast from 'react-hot-toast'; // Added toast import

const stripePromise = loadStripe('pk_test_51Pf5EhCdXu8yBChANSargTazr0qyy2wmNsYWLn8TE1275HeCRpbKBANyzzAYVmWkuASBVYGkJtZwshLkSm1R80wv00LieqtUA4');

const Cars = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const toggleCart = () => {
    if (ref.current) {
      if (ref.current.classList.contains('translate-x-full')) {
        ref.current.classList.remove('translate-x-full');
        ref.current.classList.add('translate-x-0');
      } else {
        ref.current.classList.remove('translate-x-0');
        ref.current.classList.add('translate-x-full');
      }
    }
  };

  const handleCheckout = async () => {
    try {
        const stripe = await stripePromise;
        const response = await fetch('/api/product', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cart.items)
        });

        if (!response.ok) {
            throw new Error('Failed to create checkout session');
        }

        const session = await response.json();
        toast.success('Successfully created checkout 🤑');
        await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
        toast.error('Error creating checkout session');
    }
  };

  // Calculate total item count
  const totalItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 '>
        <div className="logo mx-5 my-2 ">
          <Link href={'/'}>
            <Image src={"/2.png"} alt='logo' width={250} height={35} className='rounded-xl text-sm md:mr-[365px] md:w-[120px] w-[15vh] shadow-md' />
          </Link>
        </div>
        <div className="nav lg:ml-[0px] text-[#0d1e35] ">
          <ul className='flex items-center m-auto lg:space-x-10 md:space-x-4 space-x-2 font-semibold font-[serif] md:mr-[365px] lg:mr-[155px] lg:text-4xl md:text-3xl text-3xl '>
            <Link href={"/cars"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Cars</li></Link>
            <Link href={"/stickers"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Stickers</li></Link>
            <Link href={"/login"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Contact</li></Link>
          </ul>
        </div>
        <div onClick={toggleCart} className="cart absolute cursor-pointer right-0 top-7 mx-3 float float-end ">
          <FaOpencart size={50} className='hover:text-[#666768] to text-[#0d1e35]' />
          {totalItemCount > 0 && (
            <span className='absolute top-0 right-0 bg-[#0d1e35] text-[#fffffff8] rounded-full w-6 h-6 flex items-center justify-center text-sm'>
              {totalItemCount}
            </span>
          )}
        </div>
        <div ref={ref} className='lg:w-96 w-64 h-full sidecart absolute top-0 right-0 bg-[gray] lg:px-7 px-4 py-10 transform z-20 overflow-x-hidden transition-transform translate-x-full '>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className='absolute top-6 right-2 cursor-pointer text-2xl'><IoIosCloseCircleOutline /></span>
          <ol className='list-decimal font-bold'>
            {cart.items.map((item, index) => (
              <li key={index}>
                <div className='item flex my-5 '>
                  <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>{item.name}</div>
                  <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                    <HiMinus className='cursor-pointer' onClick={() => dispatch(removeItem(item.name))} />
                    <span className='mx-2'>{item.quantity}</span>
                    <HiPlus className='cursor-pointer' onClick={() => dispatch(addItem({ name: item.name, price: item.price }))} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className='flex flex-col'>
            <h2 className='font-bold text-lg mb-4'>Total Price: ${cart.totalPrice.toFixed(2)}</h2>
            <div className='flex mt-4'>
              <button onClick={handleCheckout} className="flex items-center text-[#adacac] bg-[#1d5045] border-0 py-2 px-4 focus:outline-none hover:bg-[#29685a] rounded text-lg mr-4">
                <FaBagShopping className='m-1' /> CheckOut
              </button>
              <button onClick={() => dispatch(clearCart())} className="flex items-center text-[#adacac] bg-[#1d5045] border-0 py-2 px-4 focus:outline-none hover:bg-[#29685a] rounded text-lg">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <HeroBanner />
      </section>
      <Footer />
    </div>
  );
};

export default Cars;