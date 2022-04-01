import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Features({quality}){


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
   
    let featuresJsx=quality.map((qu,index)=>{
        return(
            <div key={index} className="text-left">
                <FontAwesomeIcon icon={qu.icon} className="text-[38px] text-[#6B7CFF] mb-[12px]"/>
                <h4 className="text-[26px] md:text-[32px] font-bold leading-[38.4px] md:pr-[40px] mb-[12px]">{qu.title}</h4>
                <p className="text-[16px] leading-[24px] text-[#1D2130] font-normal">{qu.desctption}</p>
            </div>
        )
    })
    return(
        <div className="pt-[80px] container pb-[50px] px-6 text-center">
            <h2 className=" leading-[120%] text-[24px] font-bold capitalize text-[#6B7CFF] mb-[20px]">high quality</h2>
            <h3 className="text-[32px] md:text-[48px] font-bold text-mainBlack leading-[57.6px] w-[600px] max-w-full mx-auto">
                We have the Best Solution for your Business</h3>
            <div className=" bg-[#E0E4FC] rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[30px]
            mt-[30px]" data-aos="fade-right">
                {featuresJsx}
            </div>
        </div>
    )
}