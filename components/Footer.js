import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

export default function Footer(){
    return(
        <div className="bg-[#1D2130] p-[50px]">
            <div className="container">
                <footer className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px]">
                    <div>
                        <h6 className="text-[18px] leading-[27px] text-[#FFFFFF] capitalize mb-[10px] font-semibold">
                            company</h6>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            About Us</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Why Choose us</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Pricing</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Testimonial</p>
                    </div>
                    <div>
                        <h6 className="text-[18px] leading-[27px] text-[#FFFFFF] capitalize mb-[10px] font-semibold">
                            resources</h6>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Privacy Policy</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Terms and Condition</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Blog</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Contact Us</p>
                    </div>
                    <div>
                        <h6 className="text-[18px] leading-[27px] text-[#FFFFFF] capitalize mb-[10px] font-semibold">
                            product</h6>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Project management</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Time tracker</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Time schedule</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Lead generate</p>
                        <p className=" font-normal text-base text-[#FFFFFF] opacity-60">
                            Remote Collaboration</p>
                    </div>
                    <div>
                        <h3 className="text-[24px] text-[#FFFFFF] font-bold mb-[20px]">
                            Finsweet</h3>
                        <p className="text-[#FFFFFF] mb-[12px] text-[18px]">
                            Subscribe to our Newsletter</p>
                        <div className='w-[410px] max-w-full h-[56px] bg-[#2B2E3C] rounded-[8px]
                        flex justify-between items-center flex-wrap'>
                            <input type={"text"} className=" outline-none bg-transparent text-[#FFFFFF] p-[6px] pt-[0px] w-[60%]"
                            placeholder='Enter Your Email'/>
                            <button className='w-[40%] h-[56px] rounded-xl bg-[#FFFFFF] capitalize duration-300
                            font-bold'>
                            subscribe</button>
                        </div>
                    </div>
                </footer>
                <div className=' mt-[40px] relative flex justify-between items-center'
                >
                        <span className='block h-[1px] bg-[#888888] flex-grow'></span>
                        <div className='flex justify-center items-center text-[#FFFFFF] opacity-50 w-fit'>
                        <p className='text-[14px] mx-[5px] md:mx-[10px] '>Copyright Finsweet 2022</p> <FaFacebook className='text-[26px] mx-[5px] md:mx-[10px]'/> 
                        <FaTwitter  className='text-[26px] mx-[5px] md:mx-[10px]'/> 
                        <FaInstagram  className='text-[26px] mx-[5px] md:mx-[10px]'/> <FaLinkedin  className='text-[26px] mx-[5px] md:mx-[10px]'/>
                        </div>
                        <span className='block h-[1px] bg-[#888888] flex-grow'></span>
                </div>
            </div>
        </div>
    )
}