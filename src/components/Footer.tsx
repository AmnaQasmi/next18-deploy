import React from 'react';
import Link from 'next/link';
import { headerItems } from '@/constants/constant';


const Footer = () => {
    return (
        <section id={headerItems.contact.page}>
            <div className='mt-24 top-14'>
                <footer className="text-gray-600 body-font ">
                    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <img src="/w.png" alt="" width={200} height={40} />
                            </Link>

                            <p className="mt-2 text-sm text-gray-500"> Venom Motors Create The first best HyperSport car in the world you also know us in Universal Studios&#39; Furious 7. It was featured as the hero car in the movie and is the most expensive car ever to be featured in The Fast & The Furious Franchise. </p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-[35px]">
                                <h2 className="title-font font-medium text-[#0d1e35] tracking-widest text-sm mb-3  ">HYPERSPORT CATEGORIE</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800 ">LYKAN</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-[35px]">
                                <h2 className="title-font font-medium text-[#0d1e35] tracking-widest text-sm mb-3 ">SUPERSPORT CATEGORIE</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">FENYR</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-[35px]">
                                <h2 className="title-font font-medium text-[#0d1e35] tracking-widest text-sm mb-3 ">ABOUT US</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href="http://localhost:3000/visitcars" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">VISIT US</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/cars" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">OUR CARS</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/stickers" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">OUR STICKERS</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/services" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">OUR SERVICES</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/ourstory" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">OUR STORY</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-[35px]">
                                <h2 className="title-font font-medium text-[#0d1e35] tracking-widest text-sm mb-3 ">GHAITH CATEGORIE</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">VIP</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">SMART PETROL</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">SWAT</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-[35px]">
                                <h2 className="title-font font-medium text-[#0d1e35] tracking-widest text-sm mb-3 ">PORTFOLIO CATEGORIE</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a href="https://web-app-two-omega.vercel.app/" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" target="_blank" >PORTFOLIO 1st</a>
                                    </li>
                                    <li>
                                        <a href="https://interactive-app-amna-qasmis-projects.vercel.app/" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" target="_blank">PORTFOLIO 2nd</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#807f7f]">
                        <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
                            <i className="text-[#c7ced1] text-sm text-center sm:text-left ">&copy; 2024 VMOTORS — ALL PICTURES AND OTHER WORKS PUBLISHED ON THIS WEBSITE ARE SUBJECT TO THE COPYRIGHT OF V MOTORS AUTOMOTIVE GROUP HOLDING LIMITED. ALL RIGHTS RESERVED.
                                <a href="https://wmotors.ae/hypercars.html" rel="noopener noreferrer" className="text-[#c7ced1] ml-2" target="_blank">@vmotors</a>
                            </i>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
                                <a className="text-[#dde1e2]" href={'https://www.facebook.com'} target="_blank"
                                        rel="noopener noreferrer">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7 text-[#dde1e2]" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                </a>
                                <a className="ml-3 text-[#dde1e2] " href={'https://www.twitter.com'} target="_blank"
                                        rel="noopener noreferrer">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7 text-[#dde1e2]" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                </a>
                                <a className="ml-3 text-[#eceeee] " href={'https://www.Instagram.com'} target="_blank"
                                        rel="noopener noreferrer" >
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7 text-[#dde1e2]" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                </a>
                                <a className="ml-3 text-[#dde1e2] " target="_blank"
                                    rel="noopener noreferrer" href={"https://www.linkedin.com"}>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7 text-[#dde1e2]" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer
