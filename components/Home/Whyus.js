import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Whyus(){
    return(
        <div className="container px-6 pt-[50px] pb-[100px]">
            <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-2 items-center">
                <div className=" md:pr-[60px]">
                    <h3 className="text-[#6B7CFF] text-2xl font-normal mb-[12px]">Why should you work with us?</h3>
                    <h4 className="text-[32px] md:text-[44px] leading-[120%] font-bold mb-[20px]">
                        To upscale your business to the next level</h4>
                    <p className=" font-normal text-base leading-[150%] text-[#1D2130]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&#138;s standard dummy text ever since the 1500s.</p>
                </div>
                <div>
                    <p className="flex items-center my-[20px] flex-wrap">
                        <span className="w-[44px] h-[44px] rounded-[50%] flex bg-[#FFACAC] 
                        items-center justify-center mr-[12px]">
                        <FontAwesomeIcon icon={faArrowRight}/>
                        </span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <p className="flex items-center my-[20px] flex-wrap">
                        <span className="w-[44px] h-[44px] rounded-[50%] flex bg-[#FFACAC] 
                        items-center justify-center mr-[12px]">
                        <FontAwesomeIcon icon={faArrowRight}/>
                        </span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <p className="flex items-center my-[20px] flex-wrap">
                        <span className="w-[44px] h-[44px] rounded-[50%] flex bg-[#FFACAC] 
                        items-center justify-center mr-[12px]">
                        <FontAwesomeIcon icon={faArrowRight}/>
                        </span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
            </div>
        </div>
    )
}