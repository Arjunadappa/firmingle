import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay,Navigation,Pagination} from 'swiper';
import TestimonialBox from './testimonialBox';
import Display from '../logos/display-1.jpeg'

function testimonials(){
    const testimonialData=[{
        DisplayImage:Display,
        Data:"We reached out to them for our Firmingle deck with little info as we're still a new startup. They guided us well in identifying our high's and low's.Their team's cooperative efforts are a total delight. Looking forward to working on many more projects"
    }];
    
    return(
        <>
         <div className='flex justify-center mt-10 pt-6 text-5xl'><h1>What our clients say about us</h1></div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        speed={1500}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:20,
            },
            768:{
                slidesPerView:1,
                spaceBetween:40,
            },
            1024:{
                slidesPerView:1,
                spaceBetween:50,
            },
        }}

        modules={[Autoplay , Pagination ,Navigation]}
				className=" MySwiper mt-10 mb-20"
        >
           
            <SwiperSlide>
                <TestimonialBox Display={testimonialData[0].DisplayImage} data={testimonialData[0].Data}>
                </TestimonialBox>
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialBox Display={testimonialData[0].DisplayImage} data={testimonialData[0].Data}>
                </TestimonialBox>
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialBox Display={testimonialData[0].DisplayImage} data={testimonialData[0].Data}>
                </TestimonialBox>
            </SwiperSlide>
           
        </Swiper>     
        </>
    );
};
export default testimonials;
