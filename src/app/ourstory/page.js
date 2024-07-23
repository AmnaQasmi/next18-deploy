'use client'
import Link from 'next/link';
import { GiHomeGarage } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { userInfo } from "@/constants/constant";
import { FaOpencart } from "react-icons/fa";
import Footer from '@/components/Footer';

export const Thoughts = () => {
    const route = useRouter();
    const Navigate = (Name) => {
        route.push(Name)
    }
    return (
        <div className='absolute'>
            <div className='flex flex-row md:flex-row md:justify-center justify-between items-center absolute text-[#fffdfd]'>
                {/* right home garage icon */}
                <ul>
                    <li className=' absolute mx-5'>
                        <Link href="/" >
                            <GiHomeGarage
                                className='text-[#fffdfd] lg:my-4 lg:mx-2 my-1 text-3xl lg:text-5xl'
                                onClick={() => Navigate("/")}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex justify-end items-end  '>

                <img
                    src={"/FOUNDER.jpg"}
                    alt='dp'
                    width={2500}
                    height={40}
                    className=' '
                />
                <h3 className='text-[#fffdfd] absolute lg:text-6xl md:text-3xl text-xl font-[audimatregular] pb-4 pr-5 '>
                    FOUNDER & CEO
                </h3>
            </div>
            <div className='text-center justify-center items-center'>
                <h4 className="lg:ml-[10px] my-8 underline text-[#031027] font-sans lg:text-5xl md:text-2xl text-3xl">
                    <i> Inspired Journey Of {userInfo.name}</i>
                </h4>
            </div>
            <div className='lg:text-start lg:ml-3 text-center justify-center items-center '>
                <p className='lg:text-3xl md:text-2xl text-xl font-[serif] '>
                    <i>
                        Headquartered in Dubai, but with an international pedigree and global audience, Venom Motors is the foremost manufacturer of high-performance luxury hypercars in the Middle East.
                        Founded in 2012 by entrepreneur and innovator Ralph R. Debbas, and supported by a supremely qualified team of design, development and production experts, Venom Motors offers the full spectrum of automotive services.
                    </i>
                    <i className='items-center justify-center lg:mx-[620px] py-2 mx-4 my-2'>
                        <button onClick={() => Navigate("/cars")} className='flex text-4xl text-[#c5c2c2] bg-[#1d5045] border-2 border-[#dbd8d8] shadow-lg shadow-slate-900 rounded-md px-3'> <FaOpencart className='mx-2' /> Wanna Buy</button>
                    </i>
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default Thoughts;