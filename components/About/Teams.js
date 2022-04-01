import { dataTeams } from "../../data/TeamsData"
import Image from "next/image"
export default function Teams(){
    let teamsJsx=dataTeams.map(data=>{
        return(
            <div key={data.name} className="bg-[#E0E4FC] rounded-xl overflow-hidden">
                <Image src={data.img} width="400px" height={"300px"} className="rounded-xl duration-300
                hover:scale-125"/>
                <h4 className="px-[20px] py-[5px] font-bold text-[24px] text-mainBlack">
                    {data.name}</h4>
                <h6 className="text-[16px] text-mainBlack opacity-[0.87] px-[20px] pb-[30px]">
                    {data.job}</h6>
            </div>
        )
    })
    return(
        <div className="py-[100px]">
            <div className="container px-6 flex justify-between flex-wrap">
                <div className="lg:w-[34%] md:mb-0 mb-[30px] md:w-[40%]">
                    <h2 className="font-bold text-mainBlack text-[32px] sm:text-[48px] leading-[57.6px] mb-[15px]">
                        Our talented Team</h2>
                    <p className="text-[18px] leading-[27px] font-normal text-mainBlack opacity-[0.87]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                </div>
                <div className="lg:w-[64%] md:w-[58%] xl:grid-cols-3 grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center">
                    {teamsJsx} 
                </div>
            </div>
        </div>
    )
}