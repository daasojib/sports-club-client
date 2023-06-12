import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import slide1 from "../../../assets/Categories/slide1.jpg";
import slide2 from "../../../assets/Categories/slide2.jpg";
import slide3 from "../../../assets/Categories/slide3.jpg";
import slide4 from "../../../assets/Categories/slide4.jpg";
import slide5 from "../../../assets/Categories/slide5.jpg";
import slide6 from "../../../assets/Categories/slide6.jpg";
import SectionHeading from "../../../components/SectionHeading";

const Category = () => {
  return (
    <section>
      <SectionHeading
        heading={"Popular Games"}
        subHeading={"Six Popular Games"}
      ></SectionHeading>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-1/2"
      >
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
