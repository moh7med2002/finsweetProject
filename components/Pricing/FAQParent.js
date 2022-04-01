import { faqData } from "../../data/FAQData"
import FaqBox from "./FAQ"
export default function FAQParent(){
    return(
        <div className="container px-6 py-[50px]">
            <div className="bg-[#F0F2FE] rounded-[24px] flex justify-between flex-wrap p-[30px] md:p-[50px]">
            <div className="md:w-[35%] w-[100%]">
                <h2 className="font-bold text-[32px] leading-[40px] sm:text-[48px] text-mainBlack sm:leading-[58px] mb-[15px]">
                    Frequestly Asked Questions</h2>
                <p className="font-normal text-[16px] text-mainBlack opacity-[0.87]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
            <div className="md:w-[55%] w-[100%]">
                {faqData.map(data=>{
                    return(
                        <FaqBox data={data} key={data.title}/>
                    ) 
                })}
            </div>
        </div>
        </div>
    )
}