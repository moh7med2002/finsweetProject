import Image from 'next/image'
import Logos from '../Home/Logos'

export default function ProductHeader(){
    return(
        <div className='pt-[100px] md:mb-[100px] mb-[50px]'>
            <div className="container grid lg:grid-cols-2 px-6 gap-6 items-center mb-[20px]">
                <div>
                    <h2 className='font-bold text-mainBlack text-[32px] sm:text-[56px] leading-[110%] mb-[15px]'>
                        Grow your Sales and Services
                    </h2>
                    <p className=' font-normal text-mainBlack text-[18px] leading-[27px] mb-[20px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&#138;s standard dummy</p>
                    <button className='w-[163px] h-[56px] bg-mainBlack text-[#FFFFFF] capitalize rounded-xl
                     duration-300 hover:bg-[#313852] mr-[15px]'>
                        get started</button>
                    <button className='w-[163px] h-[56px] bg-[#FFFFFF] capitalize text-mainBlack boxBorder rounded-xl
                    duration-300 hover:bg-mainBlack hover:text-[#FFFFFF] hover:border-0'>
                        contact us</button>
                </div>
                <div>
                    <Image src={'/Images/Dashboard image.png'} width={'1024px'} height={'667px'} alt=""/>
                </div>
            </div>
            <Logos/>
        </div>
    )
}