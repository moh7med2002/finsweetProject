import {testimonials} from '../../data/Testimonials'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default function Testimonials(){

    let swiperJsx=testimonials.map((test,index)=>{
        return(
          <SwiperSlide key={index}>
            <div className='boxBorder p-[40px] text-center'>
              <p className='mb-[15px] font-semibold text-[18px] leading-[27px] text-mainBlack'>{test.text}</p>
              <Image src={test.img} width={'56px'} height={'56px'} className=" rounded-[50%]" alt=''/>
              <h5 className=' font-medium text-mainBlack text-[20px] capitalize mt-[10px]'>{test.name}</h5>
              <h6 className='text-[12px] text-mainBlack font-normal'>{test.job}</h6>
            </div>
          </SwiperSlide>
        )
      })

    return(
        <div className='container px-6 py-[70px]'>
            <h2 className='text-center text-[32px] md:text-[48px] md:leading-[57.6px] font-bold text-mainBlack
            mb-[50px] w-[640px] max-w-full mx-auto'>
                The stunning result our customers have experienced</h2>
            <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        }}
        className="mySwiper"
    >
        {swiperJsx}
        </Swiper>
            </div>
        </div>
    )
}