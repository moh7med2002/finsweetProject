import {useState,useEffect} from 'react'
import { pricingData } from '../../data/PricingData';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
export default function LandPrice(){
    let [allData,setAllData]=useState(pricingData);
    let[subData,setSubData]=useState(pricingData.monthly);
    let[monthly,setMonthly]=useState(true);
    let[yearly,setYearly]=useState(false);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    function choosePrice(id){
        let result=subData.map(data=>{
            return{
                ...data,
                clicked:data.id===id?true:false
            }
        })
        setSubData(result)
    }
    let pricingJsx=subData.map((data,index)=>{
        return(
            <div key={index} className={`${data.clicked?' bg-[#F0F2FE]':'bg-[#FFFFFF]'} 
            rounded-[24px] py-[20px]" data-aos="fade-up`} onClick={()=>choosePrice(data.id)}>
                <div className={`flex items-center border-b-[1px]  p-[30px] ${data.clicked?"border-mainBlack":'border-[#D8D8D8]'}`}>
                    <div className='mr-[15px] w-[54px] h-[54px] rounded-[50%] bg-[#D8D8D8] flex items-center justify-center'>
                        <FontAwesomeIcon icon={data.icon} className="text-[22px]"/>
                    </div>
                    <div>
                        <h3 className='text-[36px] leading-[43.2px] font-bold  mb-[0px]'>{data.type}</h3>
                        <span className='text-base font-[300] text-[#1D2130]'>{data.description}</span>
                    </div>
                </div>
                <div className='p-[30px]'>
                    {data.features.map(da=>{
                        return <p key={da} className="mb-[15px]">
                            <span className='w-[24px] h-[24px] rounded-[50%] bg-[#D5F5EA] inline-block text-center mr-[12px]'>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            {da}</p>
                    })}
                </div>
                <p className='p-[30px] text-center text-[14px] leading-[150%] font-normal w-[320px] mx-auto'>
                    {data.text}</p>
                <h4 className='text-center font-bold text-[52px]'>{data.price}</h4>
                <p className='text-center text-[12px] font-normal opacity-90'>{data.limited}</p>
                <div className='text-center my-[20px]'>
                <button className="bg-[#1D2130]  w-[140px] h-[54px] rounded-xl mx-auto text-white
                capitalize duration-300 hover:bg-[#313852] ">get started</button>
                </div>
            </div>
        )
    })

    function PriceMonthly(){
        setMonthly(true)
        setYearly(false)
        setSubData(allData.monthly)
    }

    function PriceYearly(){
        setMonthly(false)
        setYearly(true)
        setSubData(allData.yearly)
    }

    return(
        <div className="py-[80px] relative overflow-hidden">
            <div className="container px-6">
            <h2 className="text-center text-mainBlack font-bold text-[34px]
             md:text-[56px] leading-[61.6px] w-[500px] max-w-full mx-auto">
                Pricing plans that suit you</h2>
            <p className="my-[20px] font-normal text-[18px] leading-[27px] text-mainBlack mx-auto w-[350px] max-w-full text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className="mx-auto w-[320px] h-[72px] bg-[#E0E4FC] rounded-[20px] flex items-center justify-between p-[7px]">
                <button className={`w-[150px] h-[56px] rounded-xl ${monthly?'btnClicked':'btnNotClicked '} decoration-blue-300`}
                onClick={PriceMonthly}>
                    Monthly</button>
                <button className={`w-[150px] h-[56px] rounded-xl ${yearly?"btnClicked":'btnNotClicked'} duration-300`}
                onClick={PriceYearly}>
                    Yearly</button>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-[30px] mt-[50px]'>
                {pricingJsx}
            </div>
            </div>
            <div className=' absolute w-full h-full top-0 left-0 bg3linear z-[-1]'></div>
        </div>
    )
}