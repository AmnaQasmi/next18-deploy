'use client'
import Link from 'next/link';
import { GiHomeGarage } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Footer from '@/components/Footer';
import { userInfo } from '@/constants/constant';

export const Service = () => {
    const route = useRouter();
    const Navigate = (Name:any) => {
        route.push(Name)
    }
    return (
        <div className='absolute '>
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
                    src={"/services.jpg"}
                    alt='dp'
                    width={2000}
                    height={20}
                    className=' '
                />
                <h3 className='text-[#fffdfd] absolute lg:text-7xl lg:pb-11 lg:pr-14 md:text-5xl text-3xl font-[audimatregular] pb-6 pr-10 '>
                    Our Services
                </h3>
            </div>
            <div className='text-center justify-center items-center mb-10'>
                <h4 className="lg:ml-[10px] my-8 text-[#07101f] font-[sans] lg:text-7xl md:text-5xl text-3xl">
                    <i> Services Provided By Our Company </i></h4>
                {
                    userInfo.services?.id?.map((skills, index) => (
                        <span
                            key={index}
                            className={"bg-[#125555] bg-gradient-to-r hover:from-[#345e5e] hover:to-[#888787] m-3 p-3 rounded-md inline-block text-lg font-serif font-semibold text-[#d8d1d1] cursor-default mb-14 shadow-xl "}>
                            <i>{skills}</i>
                        </span>
                    ))
                }
                <div className='break-words flex-wrap text-[#031027] font-[sans]'>
                    <h3 className='lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-[#07101f]'>
                        <i>We Are basically an Automotive company and provide automotive services</i>
                    </h3>
                    <p className='text-start mx-10 my-3 lg:text-3xl md:text-2xl text-xl'>
                        V Motors is an Emirati sports car company, being the first developer of high-performance luxury sports cars in the Middle East. Based in Dubai, the company&apos; activities include automotive design, research and development, as well as vehicle engineering and manufacture. V Motors also performs automotive consultancy within its Special Project Operations division.
                        In addition to developing its own cars W Motors developed the first vehicle for China-based sister company ICONIQ Motors — the ICONIQ Seven.
                    </p>
                    <p className=' text-start mx-10 my-3 lg:text-3xl md:text-2xl text-xl'>
                        W Motors plans to begin development of its production facility in Dubai.The facility will accommodate the production of W Motors&#39; current and future models including electric and autonomous vehicles and join the existing W Motors&#39; Dubai-based Design Studio and its flagship Gallery.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex break-words flex-wrap text-center justify-center items-center border-t-[3px] mx-6 border-[#ddd7d7]'>
                    <h4 className="lg:ml-[10px] lg:my-8 my-3 text-[#081224] mr-6 font-[sans] lg:text-7xl md:text-6xl text-3xl">
                        <i> Brand Ambassador of VMotors </i>
                    </h4>

                </div>

                <div className='flex lg:flex-row flex-col lg:mt-[25px] mt-2'>
                    <div className='justify-center items-center text-start lg:w-[800px] text-[#07101f]'>
                        <h2 className='my-5 mx-11 lg:text-6xl md:text-4xl text-2xl font-[Airel] '><i>Brand Ambassador:</i></h2>
                        <h3 className='my-4 mx-11 lg:text-4xl md:text-3xl text-xl font-[Airel] '><i>OLIVER JAMES WEBB </i></h3>
                        <p className=' flex flex-wrap my-3 mx-12 lg:text-3xl md:text-2xl text-1xl font-[Airel] '>
                            <i>
                                “It&#39;s really exciting for me to become W Motors&#39; official brand ambassador, and an honour to have been approached by Ralph.
                                We share many values, among them an appreciation for the absolute best in performance. I think that with
                                my driving and track experience, coupled with the vision of the company and expertise of the team, we can achieve great things!”
                            </i>
                        </p>
                    </div>
                    <div className='justify-center items-center text-center lg:w-[500px] md:w-[450px] w-[350px] lg:ml-[170px] md:ml-[160px] sm:ml-[155px] ml-[75px] mx-[65px]'>

                        <img
                            src={'/brand ambassador.webp'}
                            alt='brand ambassador'
                            height={50}
                            width={500}
                            className='rounded-md'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Service
