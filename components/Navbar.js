import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered , faXmark} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from 'next/link'
export default function Nav(){
    let[showNav,setShowNav]=useState(false)
    return(
        <div className="fixed w-[100%] z-[40] shadow">
            <div className="bg-[#FFFFFF] z-40 relative w-[100%]">
            <nav className="container px-6 py-3 h-[71px]">
            <div className="flex items-center">
                <div className="flex-grow">
                    <h2 className=" text-mainBlack font-bold capitalize text-[24px]">finsweet</h2>
                </div>
                <div className={`shadow lg:shadow-none absolute top-[71px] left-0 w-[100%] p-3 ${showNav?"block":'hidden'}  
                lg:relative lg:top-0 lg:p-0 lg:w-fit lg:block bg-[#E0E4FC] lg:bg-transparent`}>
                    <ul className="flex flex-col lg:flex-row lg:gap-[25px]">
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/'}><a>home</a></Link>
                        </li>
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/product'}><a>product</a></Link>
                        </li>
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/pricing'}><a>pricing</a></Link>
                        </li>
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/AboutUs'}><a>about us</a></Link>
                        </li>
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/blog'}><a>blog</a></Link>
                        </li>
                        <li className="text-[#1D2130] font-normal text-[16px] capitalize cursor-pointer
                        lg:mb-[0] mb-[8px] duration-300 hover:text-[#6B7CFF]">
                            <Link href={'/contact'}><a>contact</a></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#1D2130] text-white w-[140px] h-[54px] rounded-xl mx-[15px]
                     capitalize duration-300 hover:bg-[#313852]">free trial</button>
                </div>
                <div className="border-[2px] border-black px-[5px] cursor-pointer ml-[6px] lg:hidden
                w-[50px] h-[50px] flex items-center justify-center duration-300 hover:text-[#6B7CFF] hover:border-[#6B7CFF]" 
                onClick={()=>setShowNav(!showNav)}>
                    {!showNav?
                    <FontAwesomeIcon icon={faBarsStaggered} className=" text-[30px]"/>
                    :<FontAwesomeIcon icon={faXmark} className=" text-[40px]"/>}
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}