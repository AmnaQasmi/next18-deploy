'use client'
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { FaOpencart } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => { // Rename the component to Page

    return (
        <div>
            <Menu />

            <ul className='text-center justify-center items-start'>
                <li className='lg:text-5xl md:text-3xl text-2xl hover:text-[#666768] to text-[#fffdfd] font-[Menlo]'>
                    <h4 className='font-extrabold md:mr-[150px] lg:pl-[400px] items-center uppercase my-3 mx-5 absolute'>
                        <i>NOW CHECK THIS OUT</i>
                    </h4>

                    <video
                        autoPlay muted loop style={{
                            height: "115vh", // or any other value you want
                            width: "100%", // optional
                        }}
                    >
                        <source src="/fenyr.mp4" type="video/mp4" />
                    </video>

                    <Link href="/cars">
                        <div className='items-center justify-center lg:mx-[620px] mx-4 py-2 px-2 my-2'>
                            <button
                                className='flex text-[#c5c2c2] bg-[#1d5045] border-2 border-[#dbd8d8] shadow-lg shadow-slate-900 rounded-md'>
                                <FaOpencart /> Wanna Buy
                            </button>
                        </div>
                    </Link>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default Page; // Export the component with the updated name
