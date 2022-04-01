import { dataProductFeatures } from "../../data/ProductFeaturesData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function ProductFeatures(){
    let Jsx=dataProductFeatures.map(prod=>{
        return(
            <div key={prod.title}>
                <FontAwesomeIcon icon={prod.icon} className="text-[#6B7CFF] text-[28px] mb-[12px]"/>
                <h3 className="font-bold text-2xl text-mainBlack mb-[12px]">{prod.title}</h3>
                <p className="text-base font-normal text-mainBlack">{prod.descrption}</p>
            </div>
        )
    })
    return(
        <div className="pt-[100px]  relative overflow-hidden mb-[10px]">
            <h2 className="px-6 text-mainBlack capitalize font-bold text-[32px] md:text-[48px] leading-[57.6px] mb-[15px] text-center
            w-[800px] max-w-full mx-auto">
                Get the best out of your company with our service</h2>
            <div className="mt-[40px] productLand rounded-tr-[69px] mr-[30px] lg:mr-[80px]">
                <div className="container px-6 grid md:grid-cols-3 sm:grid-cols-2 py-[30px] gap-x-[25px] gap-y-[40px]">
                    {Jsx}
                </div>
            </div>
            <div className="bg2linear absolute w-[100%] h-[100%] top-0 left-0 z-[-1]"></div>
        </div>
    )
}