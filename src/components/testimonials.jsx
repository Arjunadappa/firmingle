import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper';
import TestimonialBox from './testimonialBox';
import Display from '../logos/display-1.jpeg'

function testimonials(){
    const testimonialData=[{
        DisplayImage:Display,
        Data:"We reached out to them for our Firmingle deck with little info as we're still a new startup. They guided us well in identifying our high's and low's.Their team's cooperative efforts are a total delight. Looking forward to working on many more projects"
    }];
    return(
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        modules={[Autoplay]}
				className=" MySwiper mt-20 mb-20"
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