import Image from 'next/image'
export default function BlogHeader(){
    return(
        <div className="py-[50px]">
            <div className="container px-6">
                <h2 className="text-center font-bold text-mainBlack text-[32px] sm:text-[56px]">
                    Read our latest blogs</h2>
                <p className="text-[18px] leading-[27px] text-mainBlack text-center w-[780px] max-w-full mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                <div className="mt-[40px] border rounded-3xl grid lg:grid-cols-2 md:p-[40px] md:gap-[40px] gap-[30px] p-[30px]">
                    <div>
                        <h3 className="font-bold text-[24px] text-[#6B7CFF] mb-[12px]">
                            Trending Post</h3>
                        <h4 className="font-bold text-mainBlack text-[30px] sm:text-[48px] sm:leading-[57.6px] mb-[20px] leading-[32px]">
                            New invoicing features to help you get paid faster</h4>
                        <p className='font-normal text-base text-[#6D6E76]'>
                            Over the past few months, we’ve added several new features to SaaS Invoicing 
                            to help any business get paid faster and streamline their collection workflows.</p>
                        <p className='font-normal text-base text-mainBlack opacity-[0.87]'>
                            Luke Matthews l  November 8, 2021</p>
                    </div>
                    <div>
                        <Image src={'/Images/blogBg.png'} width="552px" height={'319px'} className=" rounded-3xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}