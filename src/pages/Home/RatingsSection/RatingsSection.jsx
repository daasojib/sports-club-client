import SectionHeading from "../../../components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RatingsSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://sports-club-server-pi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-24">
      <SectionHeading
        heading={"Sports Details"}
        subHeading={"Sports Wise Ratings and Details"}
      ></SectionHeading>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="m-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.ratings}
                readOnly
              />
              <p className="py-4">{review.details}</p>
              <h4 className="text-2xl text-slate-400 ">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RatingsSection;
