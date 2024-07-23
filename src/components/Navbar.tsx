"use client"
import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { NavItems } from "@/models/Headers"
import { headerItems } from "@/constants/constant"
import { AiOutlineX } from "react-icons/ai";

const Navbar: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false)
    return (
        <div>
            <div className="">
                <AiOutlineX
                    size={45}
                    className="hover:bg-[#474747] rounded absolute"
                    onClick={() => showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`text-2xl hover:text-[#494848d0] to text-black font-serif font-bold bg-[#636368] pb-[20px] absolute ml-[1760px] float-right justify-end mt-[40px] inline-block  ${navItem ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItems).map((item) => (
                        <ScrollLink
                            to={headerItems[item as keyof NavItems].page}
                            key={headerItems[item as keyof NavItems].label}
                            className="block float sm:mt-4 mt-7 mr-4 py-3 ml-6 cursor-pointer "
                            spy={true}
                            smooth={true}
                        > {headerItems[item as keyof NavItems].label}
                        </ScrollLink>
                    ))
                }

            </div>

        </div>
    )
}
export default Navbar;