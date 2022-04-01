import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function CTA(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className='py-[40px] relative overflow-hidden'>
            <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
                <div data-aos="fade-right">
                    <h2 className='font-bold text-[30px] sm:text-[48px] leading-[57.6px] mb-[18px]'>
                        More impressions, more conversions</h2>
                    <p className=' text-base font-normal text-[#1D2130] mb-[18px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&#138;s standard dummy</p>
                        <button className='w-[173px] h-[56px] rounded-xl bg-[#1D2130] text-white capitalize duration-300
                        hover:bg-[#313852]'>
                            get free trial</button>
                </div>
                <div data-aos="fade-left">
                    <Image src={'/Images/cta.png'} width={'576px'} height={'435px'} alt=""/>
                </div>
            </div>
            <div className=' absolute w-full h-full top-0 left-0 bg2linear z-[-1]'></div>
        </div>
    )
}