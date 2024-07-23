'use client'
// src/app/product/[car]/[slug]/page.js
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaOpencart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRef } from 'react';
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";



const BlogPost = ({ params }) => {
  const { slug } = params;
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
    }
}
const ref = useRef()
  return <>
             <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 '>
                <div className="logo mx-5 my-2 ">
                    <Link href={'/'}>
                        <img src={"/2.png"} alt='logo' width={250} height={35} className='rounded-lg text-sm md:mr-[365px] md:w-[120px] w-[15vh] shadow-md' />
                    </Link>
                </div>
                <div className="nav lg:ml-[0px] text-[#0d1e35] ">

                    <ul className='flex items-center m-auto lg:space-x-10 md:space-x-2 space-x-1 font-semibold font-[serif] md:mr-[365px] lg:mr-[155px] lg:text-4xl md:text-3xl text-3xl '>
                        <Link href={"/cars"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Cars</li></Link>
                        <Link href={"/stickers"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Stickers</li></Link>
                        <Link href={"/login"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Contact</li></Link>
                    </ul>
                </div>
                <div onClick={togglecart} className="cart absolute cursor-pointer right-0 top-7 mx-3 float float-end ">
                    <>
                        <FaOpencart
                            size={50}
                            className='hover:text-[#666768] to text-[#0d1e35]'
                        />
                    </>
                </div>
                <div ref={ref} className='lg:w-96 w-72 h-full sidecart absolute top-0 right-0 bg-[gray] lg:px-7 px-4 py-10 transform z-10 overflow-x-hidden transition-transform translate-x-full '>
                    <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                    <span onClick={togglecart} className='absolute top-6 right-2 cursor-pointer text-2xl'><IoIosCloseCircleOutline /></span>
                    <ol className='list-decimal font-bold'>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'>1</span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'> 1 </span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'> 1 </span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'> 1 </span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'> 1 </span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5 '>
                                <div className=' w-2/3 font-semibold lg:ml-2 ml-1'>Cars-Stickers : Classy Cars, Classy Stickers </div>
                                <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    < HiMinus className='cursor-pointer' /> <span className='mx-2'> 1 </span> < HiPlus className='cursor-pointer' /> </div>
                            </div>
                        </li>
                    </ol>
                    <div className='flex'>

                        <button className="flex mr-7 text-[#adacac] bg-[#1d5045] border-0 lg:py-2 py-1 lg:px-2 px-1 focus:outline-none hover:bg-[#29685a] rounded text-lg"> <FaBagShopping className='m-1' />CheckOut</button>
                        <button className="flex mr-7 text-[#adacac] bg-[#1d5045] border-0 lg:py-2 py-1 lg:px-2 px-1 focus:outline-none hover:bg-[#29685a] rounded text-lg">Clear Cart</button>
                    </div>
                </div>
            </div>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-20 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto object-top  rounded" src="https://m.media-amazon.com/images/I/71PZYCKrgQL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">VENOM MOTORS</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#1d5045] hover:text-[#29685a]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#1d5045] hover:text-[#29685a]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#1d5045] hover:text-[#29685a]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#1d5045] hover:text-[#29685a]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#1d5045] hover:text-[#29685a]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a class="text-gray-500" href="https://www.facebook.com">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="text-gray-500" href="https://www.twitter.com">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="text-gray-500" href="https://www.messenger.com">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
                <a class="text-gray-500" href="https://www.Instagram.com">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-75" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div class="flex">
                <span class="mr-3">Color</span>
                <button class="border-2 border-[gray] ml-1 bg-[#701111] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#5f5d5d] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#24362d] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#1a3536] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#142838] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#161817] rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-[gray] ml-1 bg-[#ffffff] rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div class="flex ml-6 items-center">
                <span class="mr-3">Size</span>
                <div class="relative">
                  <select class="rounded border appearance-none border-[#706f6f] py-1 focus:outline-none focus:ring-2 focus:ring-[#29685a] focus:border-[#1d5045] text-base pl-3 pr-10">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                  <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button class="flex lg:ml-16 ml-12 text-white bg-[#1d5045] border-0 py-2 px-6 focus:outline-none hover:bg-[#29685a] rounded">Add To Cart</button>
              <button class="rounded-full w-10 h-10 bg-[#a1a0a0] p-0 border-0 inline-flex items-center justify-center text-[#1d5045] hover:text-[#29685a] ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>;
};

export default BlogPost;
