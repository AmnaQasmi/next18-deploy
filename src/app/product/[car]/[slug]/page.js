'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaOpencart } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useRef } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import { FaBagShopping } from 'react-icons/fa6';

const BlogPost = ({ params }) => {
  const { slug } = params;
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
        <div className="logo mx-5 my-2">
          <Link href="/">
            <img
              src="/2.png"
              alt="logo"
              width={250}
              height={35}
              className="rounded-lg text-sm md:mr-[365px] md:w-[120px] w-[15vh] shadow-md"
            />
          </Link>
        </div>
        <div className="nav lg:ml-[0px] text-[#0d1e35]">
          <ul className="flex items-center m-auto lg:space-x-10 md:space-x-2 space-x-1 font-semibold font-[serif] md:mr-[365px] lg:mr-[155px] lg:text-4xl md:text-3xl text-3xl">
            <Link href="/cars">
              <li className="hover:text-[#666768] to text-[#0d1e35]">Cars</li>
            </Link>
            <Link href="/stickers">
              <li className="hover:text-[#666768] to text-[#0d1e35]">Stickers</li>
            </Link>
            <Link href="/login">
              <li className="hover:text-[#666768] to text-[#0d1e35]">Contact</li>
            </Link>
          </ul>
        </div>
        <div
          onClick={toggleCart}
          className="cart absolute cursor-pointer right-0 top-7 mx-3 float float-end"
        >
          <FaOpencart size={50} className="hover:text-[#666768] to text-[#0d1e35]" />
        </div>
        <div
          ref={ref}
          className="lg:w-96 w-72 h-full sidecart absolute top-0 right-0 bg-[gray] lg:px-7 px-4 py-10 transform z-10 overflow-x-hidden transition-transform translate-x-full"
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-6 right-2 cursor-pointer text-2xl"
          >
            <IoIosCloseCircleOutline />
          </span>
          <ol className="list-decimal font-bold">
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold lg:ml-2 ml-1">
                  Cars-Stickers : Classy Cars, Classy Stickers
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <HiMinus className="cursor-pointer" />
                  <span className="mx-2">1</span>
                  <HiPlus className="cursor-pointer" />
                </div>
              </div>
            </li>
            {/* Repeat similar items */}
          </ol>
          <div className="flex">
            <button className="flex mr-7 text-[#adacac] bg-[#1d5045] border-0 lg:py-2 py-1 lg:px-2 px-1 focus:outline-none hover:bg-[#29685a] rounded text-lg">
              <FaBagShopping className="m-1" />
              CheckOut
            </button>
            <button className="flex mr-7 text-[#adacac] bg-[#1d5045] border-0 lg:py-2 py-1 lg:px-2 px-1 focus:outline-none hover:bg-[#29685a] rounded text-lg">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-top rounded"
              src="https://m.media-amazon.com/images/I/71PZYCKrgQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">VENOM MOTORS</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Star ratings */}
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#1d5045] hover:text-[#29685a]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* Repeat stars */}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500" href="https://www.facebook.com">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500" href="https://www.twitter.com">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500" href="https://www.messenger.com">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-12 7.5c-.3-.05-.5-.25-.5-.5v-3a8.12 8.12 0 00-6-3c0-.25.2-.45.5-.5A8.38 8.38 0 0111.5 3c4.6 0 8.5 3.4 8.5 8.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                umami cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-[#29685a] rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-[#29685a] focus:border-[#29685a] text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button className="flex ml-auto text-[#adacac] bg-[#1d5045] border-0 py-2 px-6 focus:outline-none hover:bg-[#29685a] rounded">
                  Buy
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
