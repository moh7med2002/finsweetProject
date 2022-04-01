import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Goals(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return(
        <div className="py-[50px] bg-[#F0F2FE] mb-[30px] overflow-hidden">
            <div className="container  px-6 grid md:grid-cols-2 lg:gap-[60px] gap-[30px]">
                <div data-aos="fade-right">
                    <h3 className="font-bold text-[24px] text-[#6B7CFF] mb-[12px]">
                        Our Goals</h3>
                    <h4 className=" font-bold text-mainBlack text-[30px] md:text-[36px] md:leading-[42px] lg:text-[48px] mb-[20px] lg:leading-[57.6px]">
                        To upscale your business to the next level</h4>
                    <p className='text-[18px] font-normal leading-[27px] text-mainBlack opacity-[0.87] '>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
                <div data-aos="fade-left">
                    <h3 className="font-bold text-[24px] text-[#6B7CFF] mb-[12px]">
                        Our Vision</h3>
                    <h4 className="font-bold text-mainBlack text-[30px] md:text-[36px] md:leading-[42px] lg:text-[48px] mb-[20px] lg:leading-[57.6px]">
                        To provide solutions for growing companies</h4>
                    <p className='text-[18px] font-normal leading-[27px] text-mainBlack opacity-[0.87] '>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
            </div>
        </div>
    )
}