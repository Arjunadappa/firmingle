import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import googleLogo from '../google.png';
import microsoftLogo from '../microsoft.png';
import amazonLogo from '../amazon.png';
import 'swiper/css';


import { Autoplay} from 'swiper';

export default function Carousel() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Autoplay]}
				className="mySwiper mt-20 mx-50 max-w-6xl"
			>
				<SwiperSlide>
					<img src={microsoftLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={googleLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={amazonLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={microsoftLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={microsoftLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={amazonLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={googleLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={microsoftLogo}></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={microsoftLogo}></img>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
