import Image from "next/image"
export default function Marketing(){
    return(
        <div className='py-[50px]  overflow-hidden'>
            <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
                <div data-aos="fade-right">
                <h4 className="text-[24px] font-bold text-[#6B7CFF] capitalize">Marketing insights</h4>
                    <h5 className="font-bold text-mainBlack text-[48px] leading-[57.6px] mb-[20px] pr-[20px]">
                    Data-driven client feedback</h5>
                    <p className="text-base font-normal text-mainBlack">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry&#138;s standard dummy Ipsum is simply dummy text of the.</p>
                </div>
                <div data-aos="fade-left">
                    <Image src={'/Images/cta2.png'} width={'576px'} height={'435px'} alt=""/>
                </div>
            </div>
        </div>
    )
}