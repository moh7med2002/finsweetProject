import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCubes,faCube,faPalette, faStamp,faSplotch } from "@fortawesome/free-solid-svg-icons"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Logos(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="py-[20px]">
            <div className="container px-6 py-[20px] grid gap-[20px] lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
         data-aos="zoom-in">
                <div className="flex items-center font-bold text-[18px] justify-center">
                    <FontAwesomeIcon icon={faCubes} className="text-[30px] mr-[10px]"/>
                    logoipsum
                </div>
                <div className="flex items-center font-bold text-[18px] justify-center">
                    <FontAwesomeIcon icon={faPalette} className="text-[30px] mr-[10px]"/>
                    logoipsum
                </div>
                <div className="flex items-center font-bold text-[18px] justify-center">
                    <FontAwesomeIcon icon={faCube} className="text-[30px] mr-[10px]"/>
                    logoipsum
                </div>
                <div className="flex items-center font-bold text-[18px] justify-center">
                    <FontAwesomeIcon icon={faSplotch} className="text-[30px] mr-[10px]"/>
                    logoipsum
                </div>
                <div className="flex items-center font-bold text-[18px] justify-center">
                    <FontAwesomeIcon icon={faStamp} className="text-[30px] mr-[10px]"/>
                    logoipsum
                </div>
            </div>
        </div>
    )
}