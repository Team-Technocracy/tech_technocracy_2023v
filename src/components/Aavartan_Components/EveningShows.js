import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper";
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "./EveningShows.css";


import f1 from '../../assets/images/f1.png'
import f2 from '../../assets/images/f2.png'
import f3 from '../../assets/images/f3.png'
import f4 from '../../assets/images/f4.png'
import f5 from '../../assets/images/f5.png'
import f6 from '../../assets/images/f6.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function EveningShow() {
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="es-container" data-aos="zoom-in-down">
      <div className="eveningshow-title">
      Evening Shows
      </div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000 }}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={f1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
