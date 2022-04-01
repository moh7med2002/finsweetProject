import Image from 'next/image'
export default function AboutHeader(){
    return(
        <div className='py-[60px] text-center'>
            <div className="container px-6">
                <h2 className='font-bold sm:text-[56px] text-[32px] text-mainBlack mb-[13px]'>
                    We are proud of our products</h2>
                <p className='text-[18px] font-normal leading-[27px] text-mainBlack opacity-[0.87] w-[769px] max-w-full mx-auto'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[40px] gap-8'>
                    <Image src={'/Images/about-1.png'} width={'350px'} height={"300px"} className="rounded-[24px]"/>
                    <Image src={'/Images/about-2.png'} width={'400px'} height={"300px"} className="rounded-[24px]"/>
                    <Image src={'/Images/about-3.png'} width={'400px'} height={"300px"} className="rounded-[24px]"/>
                </div>
            </div>
        </div>
    )
}