'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaOpencart } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useRef } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import { FaBagShopping } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '@/store/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
import Image from 'next/image';

const stripePromise = loadStripe('pk_test_51Pf5EhCdXu8yBChANSargTazr0qyy2wmNsYWLn8TE1275HeCRpbKBANyzzAYVmWkuASBVYGkJtZwshLkSm1R80wv00LieqtUA4');

const Page = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    
    const toggleCart = () => {
        if (ref.current) {
            ref.current.classList.toggle('translate-x-full');
            ref.current.classList.toggle('translate-x-0');
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
            toast.success('Successfully created checkout', { icon: '🤑' });
            await stripe.redirectToCheckout({ sessionId: session.id });
        } catch (error) {
            toast.error('Error creating checkout session');
        }
    };

    const totalItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
                <div className="logo mx-5 my-2">
                    <Link href={'/'}>
                        <Image src={"/2.png"} alt='logo' width={250} height={35} className='rounded-xl text-sm md:mr-[365px] md:w-[120px] w-[15vh] shadow-md' unoptimized />
                    </Link>
                </div>
                <div className="nav lg:ml-0 text-[#0d1e35]">
                    <ul className='flex items-center m-auto lg:space-x-10 md:space-x-2 space-x-1 font-semibold font-[serif] md:mr-[365px] lg:mr-[155px] lg:text-4xl md:text-3xl text-3xl'>
                        <Link href={"/cars"}><li className='hover:text-[#666768] text-[#0d1e35]'>Cars</li></Link>
                        <Link href={"/stickers"}><li className='hover:text-[#666768] text-[#0d1e35]'>Stickers</li></Link>
                        <Link href={"/login"}><li className='hover:text-[#666768] text-[#0d1e35]'>Contact</li></Link>
                    </ul>
                </div>
                <div onClick={toggleCart} className="cart absolute cursor-pointer right-0 top-7 mx-3 float-end">
                    <FaOpencart size={50} className='hover:text-[#666768] text-[#0d1e35]' />
                    {totalItemCount > 0 && (
                        <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>
                            {totalItemCount}
                        </span>
                    )}
                </div>
                <div ref={ref} className='lg:w-96 w-64 h-full side-cart absolute top-0 right-0 bg-gray lg:px-7 px-4 py-10 transform z-20 overflow-x-hidden transition-transform translate-x-full'>
                    <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                    <span onClick={toggleCart} className='absolute top-6 right-2 cursor-pointer text-2xl'><IoIosCloseCircleOutline /></span>
                    <ol className='list-decimal font-bold'>
                        {cart.items.map((item, index) => (
                            <li key={index}>
                                <div className='item flex my-5'>
                                    <div className='w-2/3 font-semibold lg:ml-2 ml-1'>{item.name}</div>
                                    <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
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
                            <button
                                onClick={handleCheckout}
                                className="flex items-center text-[#adacac] bg-[#1d5045] border-0 py-2 px-4 focus:outline-none hover:bg-[#29685a] rounded text-lg mr-4"
                            >
                                <FaBagShopping className='m-1' /> CheckOut
                            </button>
                            <button onClick={() => dispatch(clearCart())} className="flex items-center text-[#adacac] bg-[#1d5045] border-0 py-2 px-4 focus:outline-none hover:bg-[#29685a] rounded text-lg">
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container lg:px-[100px] px-8 lg:py-24 py-7 mx-auto">
                    <div className="flex flex-wrap lg:-m-4 m-auto">
                        {[
                            {
                                name: 'double side scrach (Pair)',
                                price: 40.99,
                                ImageUrl: 'https://m.media-amazon.com/images/I/71PZYCKrgQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Single side scrach',
                                price: 31.15,
                                ImageUrl: 'https://ae01.alicdn.com/kf/H5a29aff4d63e4d2d9fba5e51ab8a7440x.jpg_640x640Q90.jpg_.webp',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Tattoo Bow Arrow',
                                price: 35.99,
                                ImageUrl: 'https://m.media-amazon.com/images/I/715VZYBqPEL._AC_UL320_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Black Fire',
                                price: 45.12,
                                ImageUrl: 'https://encrypted-tbn0.gstatic.com/Images?q=tbn:ANd9GcSbsSU23U6qq6Tom1hLXJFdWCdk6hXdkBv2Pw&s',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Signature Sticker',
                                price: 35.50,
                                ImageUrl: 'https://m.media-amazon.com/images/I/61slMM3248L._AC_UL320_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Wolf Sticker',
                                price: 25.55,
                                ImageUrl: 'https://m.media-amazon.com/images/I/61StnJ3tkdL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Paw Nail Scratch Sticker',
                                price: 21.15,
                                ImageUrl: 'https://m.media-amazon.com/images/I/61M-ITltaEL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'NFS Most Wanted Signature',
                                price: 35.15,
                                ImageUrl: 'https://m.media-amazon.com/images/I/415KUP2h2OL._SX300_SY300_QL70_FMwebp_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Classy Comb Sticker',
                                price: 30.15,
                                ImageUrl: 'https://m.media-amazon.com/images/I/51qHj-OSFxL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                            {
                                name: 'Chinese dragon Long Sticker',
                                price: 45.20,
                                ImageUrl: 'https://encrypted-tbn0.gstatic.com/Images?q=tbn:ANd9GcTGLHu94kQwaouSw06HDaKOGmHB3EGe0hm05_cNakO4lGC-oNnbg5ITLguK9kQr9VZbxW0&usqp=CAU',
                                description: 'Best water-proof stickers for your car (Hight-Quality)'
                            },
                        ].map((product, index) => (
                            <div key={index} className="lg:w-1/3 md:w-1/2 lg:p-[20px] p-4 w-full shadow-lg shadow-black rounded-lg lg:my-4">
                                <Link href={'/product/car/Bugatti Veyron'}>
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <Image alt="ecommerce" className="lg:h-[220px] h-[350px] m-auto md:m-0 block" src={product.ImageUrl} width={300} height={200} unoptimized />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                        <p className="mt-1 text-[18px] ">${product.price.toFixed(2)}</p>
                                        <p className="mt-1 text-[13px] text-black">{product.description}</p>
                                    </div>
                                </Link>
                                <button
                                    className="flex items-center text-[#adacac] bg-[#1d5045] border-0 py-2 px-4 focus:outline-none hover:bg-[#29685a] rounded text-lg"
                                    onClick={() => dispatch(addItem({ name: product.name, price: product.price }))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Page;
