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


import es1 from '../../assets/images/es1.png'
import es2 from '../../assets/images/es2.png'
import es3 from '../../assets/images/es3.png'
import es4 from '../../assets/images/es4.png'
import es5 from '../../assets/images/es5.png'
import es6 from '../../assets/images/es6.png'
import es7 from '../../assets/images/es7.png'
import es8 from '../../assets/images/es8.png'

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
          <img src={es1} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es2} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es3} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es4} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es5} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es6} alt='text' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={es7}  alt='text'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={es8} alt='text' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
