'use client'
import { GiHomeGarage } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { FaOpencart } from "react-icons/fa";

const Menu = () => {
  const route = useRouter();
  const Navigate = (Name: any) => {
    route.push(Name)
  }
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 '>
      <div className="logo mx-5 my-2 ">
        <img src={"/2.png"} alt='logo' width={200} height={40} className='rounded-xl md:mr-[365px] md:w-[120px] shadow-lg' />
      </div>
      <div className="nav lg:ml-[0px] text-[#0d1e35] ">

        <ul className='flex items-center lg:space-x-4 space-x-2 font-semibold font-[serif] md:mr-[365px] lg:mr-[155px] lg:text-4xl md:text-3xl text-2xl '>
          <Link href={"/ourstory"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Story</li></Link>
          <Link href={"/services"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Services</li></Link>
          <Link href={"/login"}><li className='hover:text-[#666768] to text-[#0d1e35]'>Contact</li></Link>
          <Link href={"/cars"}><li className='hover:text-[#666768] to text-[#0d1e35]'>VisitCars</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-7 mx-3 float float-end">
            <Link href="/" >
              <GiHomeGarage
                size={50}
                className='hover:text-[#666768] to text-[#0d1e35] '
                onClick={() => Navigate("/")}
              />
            </Link>
      </div>
    </div>
  )
}

export default Menu
