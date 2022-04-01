import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { dataValues } from "../../data/AboutValue"
export default function Values(){
    let Jsx=dataValues.map(prod=>{
        return(
            <div key={prod.title}>
                <FontAwesomeIcon icon={prod.icon} className="text-[#6B7CFF] text-[28px] mb-[12px]"/>
                <h3 className="font-bold text-2xl text-mainBlack mb-[12px]">{prod.title}</h3>
                <p className="text-base font-normal text-mainBlack">{prod.text}</p>
            </div>
        )
    })
    return(
        <div className="py-[100px]    mb-[10px]">
            <h2 className="px-6 text-mainBlack capitalize font-bold text-[32px] md:text-[48px] leading-[57.6px] mb-[15px] text-center">
                Our corporate values</h2>
            <p className="font-normal text-[18px] text-mainBlack text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            <div className="mt-[40px] container px-6 ">
                <div className=" grid md:grid-cols-3 sm:grid-cols-2 py-[30px] gap-x-[25px] gap-y-[40px] bg-[#F9F0FB] rounded-3xl p-[20px] md:p-[40px]">
                    {Jsx}
                </div>
            </div>
        </div>
    )
}