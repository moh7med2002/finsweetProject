import Image from 'next/image'
export default function LandingHome(){
    return(
        <div className=' relative'>
            <div className="container px-6 text-center py-[30px] gap-[25px]">
            <div className='w-[768px] max-w-full mx-auto  '>
            <h2 className=' text-mainBlack capitalize font-bold text-[32px] md:text-[56px] leading-[110%] mb-[15px]'>
                the best software to grow your sales and services</h2>
            <p className=' font-normal text-[18px] leading-[27px] mb-[20px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry&#138;s standard dummy.</p>
                <div className='w-[576px] max-w-full h-[72px] bg-[#FFFFFF] rounded-[20px] mx-auto
                flex justify-between items-center p-[10px] mt-[30px] mb-[50px]'>
                    <input type={"text"} className=" outline-none bg-transparent"
                    placeholder='Enter Your Email'/>
                    <button className='w-[173px] h-[56px] rounded-xl bg-[#1D2130] text-white capitalize duration-300
                    hover:bg-[#313852]'>
                        get free trial</button>
                </div>
            </div>
                <Image src={'/Images/Dashboard image.png'} width={'1024px'} height={'667px'} className="z-[-1]" alt=''/>
        </div>
        <div className='max-w-full bgLiner w-[524px] h-[300px]  absolute top-[50px] translate-x-[-50%]  left-[50%] z-[-2]'></div>
        </div>
    )
}