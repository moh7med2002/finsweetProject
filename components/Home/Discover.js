import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { discover } from "../../data/Discover"
export default function Discover(){
    let discoverJsx=discover.map((dis,index)=>{
        return(
            <div key={index} className="flex mb-[20px] items-center flex-wrap gap-[15px]">
                <div className="bg-[#F4F5F7] w-[72px] h-[72px] rounded-[50%] flex justify-center items-center mr-[15px]">
                    <FontAwesomeIcon icon={dis.icon}/></div>
                <div>
                    <h3 className=" text-[24px] leading-[120%] font-bold text-mainBlack capitalize mb-[10px]">
                        {dis.title}</h3>
                    <p className="text-[#1D2130] text-[18px] leading-[150%] font-normal">
                        {dis.description}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="py-[50px]">
            <div className="container px-6 grid lg:grid-cols-2 gap-[30px] items-center">
                <div className="">
                    <h4 className="text-[24px] font-bold text-[#6B7CFF] capitalize">discover more</h4>
                    <h5 className="font-bold text-mainBlack text-[48px] leading-[57.6px] mb-[20px]">
                        Analyze your sales and marketing leads</h5>
                    <p className="text-base font-normal text-mainBlack">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&#138;s standard dummy Ipsum is simply dummy text of the.</p>
                </div>
                <div>
                    {discoverJsx}
                </div>
            </div>
        </div>
    )
}