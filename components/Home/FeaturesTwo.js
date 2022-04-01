import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { features } from "../../data/Features"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function FeaturesTwo(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
        
    let featuresJsx=features.map((fea,index)=>{
        return(
            <div key={index} className={`lg:p-[20px] ${index%2!==0?"lg:border-x-2 lg:border-[#CDC7D2]":""} `}>
                <FontAwesomeIcon icon={fea.icon} className="text-[#6B7CFF] text-[32px] mb-[20px]"/>
                <h3 className="font-bold text-4xl mb-[20px]">
                    {fea.title}</h3>
                <p className="text-[18px] leading-[27px] font-normal text-mainBlack">
                    {fea.description}</p>
            </div>
        )
    })
    return(
        <div className="py-[50px] overflow-hidden">
            <h2 className="text-center text-mainBlack font-bold capitalize text-[48px] leading-[120%]">features</h2>
            <div className="container px-6 mt-[40px]">
                <div className="featuresBg rounded-3xl grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] p-[20px]"
                data-aos="fade-left">
                {featuresJsx}
                </div>
            </div>
        </div>
    )
}