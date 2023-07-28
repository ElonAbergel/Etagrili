'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import image1 from '../assets/BirthDay_Page/IMG_0202.jpg';
import image2 from '../assets/BirthDay_Page/IMG_0227.jpg';
import image3 from '../assets/BirthDay_Page/IMG_0259.jpg';
import image4 from '../assets/BirthDay_Page/IMG_0267.jpg';
import image5 from '../assets/BirthDay_Page/check_poto_elon.png';
import Image from 'next/image';
const images = [image1, image2, image3, image4, image5];

const Slideshow = () => {
	const nextEl = useRef(null);
	const prevEl = useRef(null);

	useEffect(() => {
		SwiperCore.use([Navigation, Pagination, Autoplay]);
		const swiper = new SwiperCore('.swiper-container', {
			navigation: {
				nextEl: nextEl.current,
				prevEl: prevEl.current,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 5000,
			},
		});
	}, []);

	return (
		<div>
			<div className=" relative w-full object-fill  h-auto ">
				<Swiper
					className="swiper-container"
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000 }}
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div className=" h-96 relative ">
								<Image
									fill={true}
									style={{ objectFit: 'cover' }}
									src={image.src}
									alt={`Slide ${index + 1}`}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div
					ref={nextEl}
					className="swiper-button-next"
				></div>
				<div
					ref={prevEl}
					className="swiper-button-prev"
				></div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	);
};

export default Slideshow;
