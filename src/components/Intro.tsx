"use client"
import { headerItems, userInfo } from '@/constants/constant';
import Link from 'next/link';
import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import Lykan from '../../public/lykan.jpeg';
import Fenyr from '../../public/fenyr.jpeg';
import GhaithSMP from '../../public/ghaithpetrol.jpeg';
import GhaithSwat from '../../public/ghaith-swat.jpeg';
import GhaithVip from '../../public/ghaith-vip.jpeg';
import { useRouter } from 'next/navigation';
import { AiOutlineX } from "react-icons/ai";
import { NavItems } from '@/models/Headers';
import Image from 'next/image';


const Intro: React.FC = () => {
  const [navItem, showNavItems] = useState<boolean>(false)
  const route = useRouter();
  const Navigate = (Name: string) => {
    route.push(Name)

  }
  return (

    <section id={headerItems.intro.page} className=' lg:mt-[120px] mt-0 '>
      <div className=''>
        <div className="flex justify-end items-baseline lg:mb-[55px] mr-4">
          <AiOutlineX
            className="hover:bg-[#777676] rounded cursor-pointer lg:my-4 sm:mt-3 mx-3 text-3xl lg:text-5xl"
            onClick={() => showNavItems(prevState => !prevState)}
          />
          <div className={`lg:text-2xl md:text-xl text-1xl hover:text-[#e9e6e6d0] to text-black font-[sans] font-bold bg-[#a3a3a5] lg:float-end md:float-end float-end justify-end items-end lg:pb-[15px] md:pb-[14px] pb-[5px] absolute rounded-md lg:ml-[1430px] md:ml-[820px] sm:ml-[400px] lg:mt-[65px] md:mt-[45px] mt-[45px] inline-block ${navItem ? 'block' : 'hidden'}`}>
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
      </div>
      <div className='text-center justify-center items-center md:mr-[15px]'>
        <div className='text-center justify-center items-center lg:mx-0 md:mx-[45px] '>
          <div
            className='mb-[80px] font-[Apple Color Emoji] font-bold text-5xl mr-10'>
            <div
              className='mb-[35px] lg:pb-[45px]'
              dangerouslySetInnerHTML={{ __html: userInfo.slogan }}
            />
            <Link
              href='/ourstory'
              onClick={() => Navigate("/ourstory")}
              className='flex justify-center items-center text-center lg:ml-[70px] hover:text-[#868688] to text-[#12192c]'>&ldquo;A MODERN MACHINE WITH A TOUCH OF HUMANITY&rdquo;</Link >
            <h3 className='flex lg:text-4xl md:text-2xl text-xl justify-center items-center text-center font-[mono] lg:ml-9 md:ml-8 mt-7 '>By</h3>
          </div>
          <h2 className='text-3xl text-center justify-center items-center font-[Apple Color Emoji] font-extrabold lg:font-bold md:font-semibold font-[Liberation Mono] uppercase mb-7 hover:text-[#4c4b4e] to text-[#12192c]'> CEO & FOUNDER OF WMOTOR <br />{userInfo.name}
          </h2>
        </div>
      </div>
      <div className='grid grid-col-5 lg:gap-9 md:gap-7 gap-5 justify-center items-center md:mx-[25px] sm:px-[55px] sm:mx-[55px]'>
        {/* first body */}
        <div className='lg:flex flex-row col-span-2 sm:justify-center sm:items-center justify-start items-start sm:px-[55px] bg-[#aeaeae] rounded-md lg:w-[1470px] lg:mx-[25px] lg:ml-[75px] w-auto md:mr-[35px] md:ml-[100px] ml-[160px] md:mx-[50px] mx-[125px] lg:mr-[85px] px-1 '>
          <div className='lg:mt-0 md:mt-[5px] mt-[15px] lg:mb-0 md:mb-0 mb-[10px] sm:justify-center sm:items-center justify-start items-start text-wrap '>
            {/* Heading content */}
            <h4 className='lg:text-6xl text-4xl font-extrabold flex flex-wrap text-[#191919] font-serif pl-[20px] pt-[20px] lg:pr-2'>LYKAN HYPERSPORT</h4>
            <div>
              {
                userInfo.carsCategory.id.map((items: string, index: number) => (
                  <span
                    key={index}
                    className='hover:text-[#3a3a3a] to text-[#e5e5e5] font-[sans] text-2xl pl-[20px] my-[35px]'>
                    {items}
                  </span>
                ))
              }
              {/* Text content */}
              <h4 className='lg:text-3xl md:text-2xl text-xl flex flex-wrap w-[500px] lg:pl-[20px] pl-[20px] lg:pb-[20px] lg:pt-[10px] text-[#323232] font-serif'>The first hypercar created by W Motors , the Lykan was also Aisa&apous;s first HyperSport, catapulted the company to international stardom when it took center stage in Universal Studios&#39; Furious 7. It was featured as the hero car in the movie and is the most expensive car ever to be featured in The Fast & The Furious Franchise.
              </h4>
            </div>
          </div>
          {/* img Content */}
          <div className='w-5 lg:mr-[470px] lg:pl-[0px] lg:mb-[560px] mb-[450px] md:pl-[20px] md:ml-[2px] ml-[20px] sm:ml[5px]'>
            <Image
              width={700}
              height={880}
              src={Lykan}
              alt='Lykan Hypersport'
              className='absolute rounded-md lg:w-[628px] lg:h-[560px] md:w-[500px] md:h-[460px] w-[460px] h-[250px]' />
          </div>
        </div>
        {/* second body */}
        <div className='lg:flex flex-row col-span-2 sm:justify-center sm:items-center justify-start items-start sm:px-[55px] bg-[#aeaeae] rounded-md lg:w-[1470px] lg:mx-[25px] lg:ml-[75px] w-auto md:mr-[35px] md:ml-[100px] ml-[160px] md:mx-[50px] mx-[125px] lg:mr-[85px] px-1'>
          <div className='lg:mt-0 md:mt-[5px] mt-[15px] lg:mb-0 md:mb-0 mb-[10px] sm:justify-center sm:items-center justify-start items-start text-wrap'>
            {/* Heading content */}
            <h4 className='lg:text-6xl text-4xl font-extrabold flex flex-wrap text-[#191919] font-serif pl-[30px] pt-[20px] lg:pr-2'>FENYR SUPERSPORT</h4>
            {
              userInfo.carsCategory1.id.map((items: string, index: number) => (
                <span
                  key={index}
                  className='hover:text-[#3a3a3a] to text-[#e5e5e5] font-[sans] text-2xl pl-[30px] my-[35px]'>
                  {items}
                </span>
              ))
            }
            {/* Text content */}
            <h4 className='lg:text-3xl md:text-2xl text-wrap flex flex-wrap w-[500px] lg:pl-[30px] pl-[25px] lg:pb-[20px] lg:pt-[10px] text-[#323232] font-serif'>The Fenyr SuperSport is a true performance beast. W Motors broke the bonds of conventional hypercar design with the Fenyr SuperSport to unleash a powerful, high-performance supercar in a league of its own. The Fenyr SuperSport is the second hypercar in the W Motors sought-after portfolio.</h4>
          </div>
          {/* img Content */}
          <div className='w-5 lg:mr-[460px] lg:pl-[0px] lg:mb-[560px] mb-[450px] md:pl-[20px] md:ml-[2px] ml-[20px] sm:ml[5px]'>
            <Image
              width={700}
              height={880}
              src={Fenyr}
              alt='Fenyr Supersport'
              className='absolute rounded-md lg:w-[625px] lg:h-[560px] md:w-[500px] md:h-[460px] w-[460px] h-[250px]]' />
          </div>
        </div>
        {/* third body */}
        <div className='lg:flex flex-row col-span-2 sm:justify-center sm:items-center justify-start items-start sm:px-[55px] bg-[#aeaeae] rounded-md lg:w-[1470px] lg:mx-[25px] lg:ml-[75px] w-auto md:mr-[35px] md:ml-[100px] ml-[160px] md:mx-[50px] mx-[125px] lg:mr-[85px] px-1'>
          <div className='lg:mt-0 md:mt-[5px] mt-[15px] lg:mb-0 md:mb-0 mb-[10px] sm:justify-center sm:items-center justify-start items-start text-wrap'>
            {/* Heading content */}
            <h4 className='lg:text-6xl text-4xl font-extrabold flex flex-wrap text-[#191919] font-serif pl-[30px] pt-[20px] lg:pr-9'>SMART PATROL</h4>
            {
              userInfo.carsCategory2.id.map((items: string, index: number) => (
                <span
                  key={index}
                  className=' font-[sans] text-2xl hover:text-[#3a3a3a] to text-[#e5e5e5] pl-[30px] my-[35px]'>
                  {items}
                </span>
              ))
            }
            {/* Text content */}
            <h4 className='lg:text-3xl md:text-2xl text-wrap flex flex-wrap w-[500px] lg:pl-[30px] pl-[25px] lg:pb-[20px] lg:pt-[10px] text-[#323232] font-serif'>The mobile policing solutions, the Special Force Vehicle is exclusively featuring W Motors&apous; distinctive DNA,as the most advanced police vehicle in the world.And features custom-built, specially designed compartment in the boot to store rescue and safety equipment with strong lines highlighting powerful muscles.</h4>

          </div>
          {/* img Content */}
          <div className='w-5 lg:mr-[550px] lg:pl-[109px] lg:mb-[560px] mb-[450px] md:pl-[20px] md:ml-[2px] ml-[20px] sm:ml[5px]'>
            <Image
              width={700}
              height={880}
              src={GhaithSMP}
              alt='Ghiath SmartPatrol'
              className='absolute rounded-md lg:w-[675px] lg:h-[560px] md:w-[500px] md:h-[460px] w-[460px] h-[250px]' />
          </div>
        </div>
        {/* fourth body */}
        <div className='lg:flex flex-row col-span-2 sm:justify-center sm:items-center justify-start items-start sm:px-[55px] bg-[#aeaeae] rounded-md lg:w-[1470px] lg:mx-[25px] lg:ml-[75px] w-auto md:mr-[35px] md:ml-[100px] ml-[160px] md:mx-[50px] mx-[125px] lg:mr-[85px] px-1'>
          <div className='lg:mt-0 md:mt-[5px] mt-[15px] lg:mb-0 md:mb-0 mb-[10px] sm:justify-center sm:items-center justify-start items-start text-wrap'>
            {/* Heading content */}
            <h4 className='lg:text-6xl text-4xl font-extrabold flex flex-wrap text-[#191919] font-serif pl-[30px] pt-[20px] lg:pr-9'>SWAT</h4>
            {
              userInfo.carsCategory2.id.map((items: string, index: number) => (
                <span
                  key={index}
                  className='font-[sans] text-2xl hover:text-[#3a3a3a] to text-[#e5e5e5] pl-[30px] my-[35px]'>
                  {items}
                </span>
              ))
            }
            {/* Text content */}
            <h4 className='lg:text-3xl md:text-2xl text-wrap flex flex-wrap w-[500px] lg:pl-[30px] pl-[25px] lg:pb-[20px] lg:pt-[10px] text-[#323232] font-serif'>Developed by W Motors the GHIATH SWAT aggressive design and technologies meet the highest industry standards for tactical response.The ruggedly aggressive design of the GHIATH SWAT is supported by customized heavy duty upgraded technological capabilities designed to support mission safety, security and success.</h4>
          </div>
          {/* img Content */}
          <div className='w-5 lg:mr-[550px] lg:pl-[192px] lg:mb-[560px] mb-[450px] md:pl-[20px] md:ml-[2px] ml-[20px] sm:ml[5px]'>
            <Image
              width={700}
              height={880}
              src={GhaithSwat}
              alt='Ghiath'
              className='absolute rounded-md lg:w-[675px] lg:h-[560px] md:w-[500px] md:h-[460px] w-[460px] h-[250px]' />
          </div>
        </div>
        {/* fifth body */}
        <div className='lg:flex flex-row col-span-2 sm:justify-center sm:items-center justify-start items-start sm:px-[55px] bg-[#aeaeae] rounded-md lg:w-[1470px] lg:mx-[25px] lg:ml-[75px] w-auto md:mr-[35px] md:ml-[100px] ml-[160px] md:mx-[50px] mx-[125px] lg:mr-[85px] px-1'>
          <div className='lg:mt-0 md:mt-[5px] mt-[15px] lg:mb-0 md:mb-0 mb-[10px] sm:justify-center sm:items-center justify-start items-start text-wrap'>
            {/* Heading content */}
            <h4 className='lg:text-6xl text-4xl font-extrabold flex flex-wrap text-[#191919] font-serif pl-[30px] pt-[20px] lg:pr-9'>VIP</h4>
            {
              userInfo.carsCategory2.id.map((items: string, index: number) => (
                <span
                  key={index}
                  className='hover:text-[#3a3a3a] to text-[#e5e5e5] font-[sans] text-2xl pl-[30px] my-[35px]'>
                  {items}
                </span>
              ))
            }
            {/* Text content */}
            <h4 className='lg:text-3xl md:text-2xl text-wrap flex flex-wrap w-[500px] lg:pl-[30px] pl-[25px] lg:pb-[20px] lg:pt-[10px] text-[#323232] font-serif'>GHIATH VIP offers the perfect blend of comfort, functionality and style, With its aggressive design, this vehicle exudes power and confidence. Equipped with LED projector headlights, the vehicle ensures optimal visibility and safety, creating a truly captivating ambiance.</h4>

          </div>
          {/* img Content */}
          <div className='w-5 lg:mr-[550px] lg:pl-[192px] lg:mb-[560px] mb-[450px] md:pl-[20px] md:ml-[2px] ml-[20px] sm:ml[5px]'>
            <Image
              width={700}
              height={880}
              src={GhaithVip}
              alt='Ghiath'
              className='absolute rounded-md lg:w-[675px] lg:h-[560px] md:w-[500px] md:h-[460px] w-[460px] h-[250px]' />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Intro;

