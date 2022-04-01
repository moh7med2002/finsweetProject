import Image from "next/image"
export default function TimeTracker(){
    return(
        <div className='py-[50px]  overflow-hidden'>
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
        <div data-aos="fade-right">
                <Image src={'/Images/cta3.png'} width={'576px'} height={'435px'} alt=''/>
            </div>
            <div data-aos="fade-left">
            <h4 className="text-[24px] font-bold text-[#6B7CFF] capitalize">Time tracker</h4>
                <h5 className="font-bold text-mainBlack text-[48px] leading-[57.6px] mb-[20px] pr-[20px]">
                Track your project performance</h5>
                <p className="text-base font-normal text-mainBlack">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
            </div>
        </div>
    </div>
    )
}