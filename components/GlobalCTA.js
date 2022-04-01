export default function GlobalCTA(){
    return(
        <div className="pb-[80px] pt-[50px] relative overflow-hidden">
            <div className=" container px-6 text-center">
            <div className="w-[830px] max-w-full mx-auto">
            <h2 className="font-bold text-[30px] sm:text-[48px] sm:leading-[57.6px] mb-[20px] leading-[32px]">
                    Are your ready to grow your business with us?</h2>
                <p className="text-base font-normal mb-[20px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="bg-[#1D2130] text-white w-[140px] h-[54px] rounded-xl mx-[15px]
                    capitalize duration-300 hover:bg-[#313852]">view pricing</button>
            </div>
            </div>
            <div className=' absolute w-full h-full top-0 left-0 bg2linear z-[-1]'></div>
        </div>
    )
}