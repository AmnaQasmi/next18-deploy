'use client'
import { headerItems, userInfo } from '@/constants/constant';
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from 'next/navigation';
import { FaOpencart } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { NavItems } from '@/models/Headers';
import { useState } from "react";
import Link from 'next/link';

const About: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false)
    const route = useRouter();
    const Navigate = (Name: string) => {
        route.push(Name)

    }
    return (
        <section id={headerItems.about.page} className='lg:mt-[120px] mt-0'>
            <div>

                <div className="flex justify-end items-baseline lg:mb-[55px] mr-4">
                    <AiOutlineX
                        className="hover:bg-[#9ba1a7] rounded cursor-pointer text-[#112d46] lg:my-4 sm:mt-3 mx-3 text-3xl lg:text-5xl"
                        onClick={() => showNavItems(prevState => !prevState)}
                    />
                    <div className={`lg:text-2xl md:text-xl text-1xl hover:text-[#316685] to text-[#0f273b]  font-[sans] font-extrabold bg-[#9ba1a7] lg:float-end md:float-end float-end justify-end items-end lg:pb-[15px] md:pb-[14px] pb-[5px] absolute rounded-md lg:ml-[1430px] md:ml-[820px] sm:ml-[400px] lg:mt-[65px] md:mt-[45px] mt-[45px] inline-block ${navItem ? 'block' : 'hidden'}`}>
                        {
                            Object.keys(headerItems).map((item) => (
                                <ScrollLink
                                    to={headerItems[item as keyof NavItems].page}
                                    key={headerItems[item as keyof NavItems].label}
                                    className="block float sm:mt-4 mt-7 lg:mt-4 md:mt-4 mr-4 lg:py-3 md:py-1 py-0 ml-6 cursor-pointer "
                                    spy={true}
                                    smooth={true}
                                > {headerItems[item as keyof NavItems].label}
                                </ScrollLink>
                            ))
                        }

                    </div>
                </div>
                <div className='flex flex-wrap break-words text-center justify-center items-center lg:w-[1500px] font-[Ariel] text-[#132e46] md:w-[1100px] w-[850px] '>

                    <h4 className='lg:text-6xl lg:pt-[90px] md:pt-[50px] text-[#112d46] font-[Ariel] '>ABOUT US THE VENOM MOTORS</h4>
                    <p className='lg:text-3xl md:text-[16px] font-[Ariel] lg:pt-[70px] md:pt-[40px] lg:px-[95px] md:px-[55px] lg:pb-7 border-t-2 border-[#b7c0c9]'>
                        W Motors is the foremost manufacturer of high-performance luxury hypercars in the Middle East.
                        W Motors is an Emirati sports car company founded in Lebanon in 2012, being the first developer of high-performance luxury sports cars in the Middle East. Based in Dubai, the company's activities include automotive design, research and development, as well as vehicle engineering and manufacture. W Motors launched its first prototype model, the Lykan HyperSport, at the Qatar International Motor Show in January 2013. Shortly thereafter, the company moved its headquarters to Dubai, in the United Arab Emirates (UAE).
                    </p>

                    <p className='lg:text-4xl md:text-2xl text-xl font-semibold lg:my-[20px] md:my-4 my-3 text-[#0d2436]  font-[Ariel]'>
                        <>
                            <Link href="/ourstory">
                                <i>Inpired Thoughts As An Entrepreneur</i>
                            </Link>
                        </>
                      
                    </p>
                        <br />
                    <i className='lg:mx-[620px] mx-4 py-2 px-2 my-2'>
                        <button onClick={() => Navigate("/services")} className='flex lg:text-4xl md:text-2xl text-xl font-medium mt-3l text-[#c5c2c2] bg-[#1d5045] border-2 border-[#dbd8d8] shadow-lg shadow-slate-900 rounded-md '><i>Services By Our Company</i></button>
                    </i>
                    <i className='items-center justify-center lg:mx-[620px] mx-4 py-2 px-2 my-2'>
                        <button onClick={() => Navigate("/cars")} className='flex text-4xl text-[#c5c2c2] bg-[#1d5045] border-2 border-[#dbd8d8] shadow-lg shadow-slate-900 rounded-md'> <i>Wanna Buy</i></button>
                    </i>
                </div>

            </div>


        </section>
    )
}
export default About;