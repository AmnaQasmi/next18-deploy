"use client"
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavItems } from "@/models/Headers";
import { headerItems } from "@/constants/constant";
import { AiOutlineX } from "react-icons/ai";
import { useRouter } from "next/navigation"; // Updated import
import Link from "next/link";

const Topper: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false)
    const router = useRouter(); // Updated hook usage

    const navigate = (name: string) => {
        router.push(name)
    }

    return (
        <section id={headerItems.home.page} className="">
            <div className="flex justify-end items-baseline">
                <AiOutlineX
                    className="hover:bg-[#535353] cursor-pointer rounded-sm absolute lg:my-4 sm:mt-3 mx-3 text-3xl lg:text-5xl "
                    onClick={() => showNavItems(prevState => !prevState)}
                />
                <div className={`lg:text-2xl md:text-xl text-1xl rounded-md hover:text-[#ccc8c8d0] to text-black font-bold font-[audimatangular] bg-[#636368] lg:pb-[15px] md:pb-[14px] pb-[5px] absolute lg:ml-[1400px] md:ml-[880px] sm:ml-[400px] lg:float-end md:float-end float-end justify-end items-end lg:mt-[75px] md:mt-[55px] mt-[45px] inline-block  ${navItem ? 'block' : 'hidden'}`}>
                    {
                        Object.keys(headerItems).map((item) => (
                            <ScrollLink
                                to={headerItems[item as keyof NavItems].page}
                                key={headerItems[item as keyof NavItems].label}
                                className="block items-center mt-2 lg:mt-4 md:mt-4 mr-4 py-2 ml-6 cursor-pointer "
                                spy={true}
                                smooth={true}
                            > {headerItems[item as keyof NavItems].label}
                            </ScrollLink>
                        ))}
                </div>
            </div>

            <div>
                <div className="flex justify-start items-start ">
                    <img
                        src="/bg.jpeg"
                        alt="bg image"
                        width={2500}
                        height={40}
                    />
                    <h3 className="text-[#5e5d5d] absolute mt-6 lg:text-6xl md:text-3xl text-xl font-bold mx-2 font-[audimatregular] pb-4 pr-5">
                        Welcome to The Home Of V Motors
                    </h3>
                </div>
                <div className="flex justify-start items-center">
                        <button className="hover:bg-[#316685] to bg-[#0f273b] font-[sans] font-extrabold text-[#c5c2c2] border-[#6d6c6c] ml-5 lg:mb-[195px] lg:px-[15px] mb-[167px] p-1 md:px-2 w-fit absolute rounded-md lg:text-2xl md:text-1xl text-sm border-2">
                    <Link href="/login">
                            <i>Join Us</i>
                    </Link>
                        </button>
                        <button className="hover:bg-[#7c2a2a] to bg-[#5f1414] font-[sans] font-extrabold text-[#c5c2c2] ml-5 mb-24 lg:px-[15px] p-1 md:px-2 w-fit absolute rounded-md lg:text-2xl md:text-1xl text-sm border-[#6d6c6c] border-2">
                    <Link href="/visitcars">
                            <i>Visit Us</i>
                    </Link>
                        </button>
                </div>
            </div>
        </section>
    )
}
export default Topper;
