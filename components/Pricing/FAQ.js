import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons"
import { faqData } from "../../data/FAQData"
import { useState } from "react"
export default function FaqBox({data}){
    let [show,setShow]=useState(true)
    return(
            <div className="bg-[#FFFFFF] my-[14px] p-[20px] rounded-3xl w-[100%]">
                <div className="flex items-center justify-between mb-[20px]">
                    <h4 className="font-bold text-[24px] text-mainBlack">
                        {data.title}</h4>
                    {show
                    ?<FontAwesomeIcon icon={faMinus} className=" cursor-pointer" onClick={()=>setShow(false)}/>
                    :<FontAwesomeIcon icon={faPlus} className=" cursor-pointer"  onClick={()=>setShow(true)}/>}
                </div>
                {show&&<p className="font-normal text-[16px] text-mainBlack opacity-[0.87]">
                    {data.description}</p>}
            </div>
    )
}