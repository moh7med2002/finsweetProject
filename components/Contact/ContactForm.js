import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faMessage , faMailReply } from "@fortawesome/free-solid-svg-icons"
export default function ContactForm(){
    return(
        <div className="py-[50px]">
            <div className='container px-6'>
                <h2 className="sm:text-[56px] text-[32px] text-mainBlack font-bold text-center">
                    Get in touch with us</h2>

                    <div className="bg-[#F0F2FE] rounded-[24px] md:p-[50px] p-[30px]">
                    <h3 className=" text-mainBlack text-[36px] font-bold mb-[10px]">
                            Drop us a message
                        </h3>
                        <p className="font-normal text-[18px] text-[#1D2130] mb-[15px]">
                            We will get back to you as soon as possible.</p>
                    <div className="flex  flex-wrap justify-between">
                        <div className="md:w-[55%] w-[100%]">
                        <form>
                            <div className="flex flex-wrap justify-between">
                            <input placeholder="Full Name" type={"text"}
                            className="sm:w-[49%] w-[100%] h-[64px] outline-none rounded-lg bg-[#ffffff] my-[12px] p-[5px] inline-block"/>
                            <input placeholder="Company Name" type={"text"}
                            className="sm:w-[49%] w-[100%] h-[64px] outline-none rounded-lg bg-[#ffffff] my-[12px] p-[5px] inline-block
                            "/>
                            </div>
                            <input placeholder="Work Email" type={"email"}
                            className="block w-[100%] my-[12px] p-[5px] h-[64px] outline-none bg-[#ffffff] rounded-lg"/>
                            <input placeholder="Subject" type={"text"} 
                            className="block w-[100%] my-[12px] p-[5px] h-[64px] outline-none bg-[#ffffff] rounded-lg"/>
                            <textarea placeholder="Message" 
                            className="block w-[100%] my-[12px] p-[5px] resize-none h-[148px] outline-none bg-[#ffffff]
                            rounded-lg"/>
                            <button type="submit" 
                            className="block w-[100%] my-[12px] p-[5px] h-[64px] text-[white] bg-[#1D2130] rounded-xl
                            duration-300 hover:bg-[#313852]">
                                Send</button>
                        </form>
                        </div>
                        <div className="md:w-[40%] w-[100%]  my-[20px]">
                            <div className="flex items-center">
                                <div className="w-[48px] h-[48px] rounded-[50%] bg-[#6B7CFF] mr-[10px] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-white text-[22px]"/>
                                </div>
                                <div>
                                    <h5 className="text-[24px] text-mainBlack font-bold">+ 1800 145 276</h5>
                                    <span  className="text-[16px] font-normal opacity-60 text-mainBlack">Free support</span>
                                </div>
                            </div>
                            <div className="flex items-center my-[20px]">
                                <div className="w-[48px] h-[48px] rounded-[50%] bg-[#6B7CFF] mr-[10px] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faMessage} className="text-white text-[22px]"/>
                                </div>
                                <div>
                                    <h5 className="text-[24px] text-mainBlack font-bold">finsweet@gmail.com</h5>
                                    <span className="text-[16px] font-normal opacity-60 text-mainBlack">Help Email support</span>
                                </div>
                            </div>
                            <div className="flex items-center my-[20px]">
                                <div className="w-[48px] h-[48px] rounded-[50%] bg-[#6B7CFF] mr-[10px] flex justify-center items-center">
                                    <FontAwesomeIcon icon={faMailReply} className="text-white text-[22px]"/>
                                </div>
                                <div>
                                    <h5 className="text-[24px] text-mainBlack font-bold">sales@finsweet.com</h5>
                                    <span className="text-[16px] font-normal opacity-60 text-mainBlack">Sales Enquiry</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}