import img1 from "../../../assets/Caurosol/first.jpg";
import img2 from "../../../assets/Caurosol/second.jpg";
import img3 from "../../../assets/Caurosol/third.jpg";
import img4 from "../../../assets/Caurosol/fourth.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <div className="text-center">
          <div className="title font-bold text-2xl text-red-500" data-swiper-parallax="-300">
          Basketball
          </div>
          <div className="subtitle text-xl" data-swiper-parallax="-200">
          Basketball is a team sport played on a rectangular court where two opposing teams made up of five players attempt to score by throwing a ball into the opponents hoop and net, otherwise known as a basket.Nikola Jokic and Jamal Murray became the first teammates in NBA Finals history to both record triple-doubles, and Denver’s two stars made sure the Nuggets reclaimed the lead in the series by beating the Miami Heat 109-94 in Game 3 on Wednesday night(Jun. 8, 2023)
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Basketball was invented in December 1891 by Canadian James W. Naismith, an instructor at the YMCA Training School in Massachusetts.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <div className="text-center">
          <div className="title font-bold text-2xl text-red-500" data-swiper-parallax="-300">
          National Football League(NFL)
          </div>
          <div className="subtitle text-xl" data-swiper-parallax="-200">
          The National Football League (NFL) is a professional American football league that consists of 32 teams, divided equally between the American Football Conference (AFC) and the National Football Conference (NFC). The NFL is one of the major professional sports leagues in the United States and Canada and the highest professional level of American football in the world.[5] The league is headquartered in New York City.Each NFL season begins with a three-week preseason in August, followed by the 18-week regular season which runs from early September to early January, with each team playing 17 games and having one bye week. Following the conclusion of the regular season, seven teams from each conference (four division winners and three wild card teams) advance to the playoffs, a single-elimination tournament that culminates in the Super Bowl, which is contested in February and is played between the AFC and NFC conference champions.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            At the corporate level, the National Football League considers itself a trade association made up of and financed by its 32 member teams. Up until 2015, the league was an unincorporated nonprofit 501association.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <div className="text-center">
          <div className="title font-bold text-2xl text-red-500" data-swiper-parallax="-300">
          Cycling
          </div>
          <div className="subtitle text-xl" data-swiper-parallax="-200">
          Cycling as a sport officially began on May 31, 1868, with a 1,200-metre (1,312-yard) race between the fountains and the entrance of Saint-Cloud Park (near Paris). The winner was James Moore, an 18-year-old expatriate Englishman from Paris. On November 7, 1869, the first city-to-city race was held between Paris and Rouen; again Moore was the winner, having covered the 135 km (84 miles) in 10 hours 25 minutes, including time spent walking his bicycle up the steeper hills. While road racing became common within a few years in continental Europe, in England the deteriorated conditions of the roads made them unsuitable, and therefore the sport there focused on the track or time trials.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            The sport is governed overall by the Union Cycliste Internationale (UCI), which is based in Switzerland, and by each country’s cycling federation.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <div className="text-center">
          <div className="title font-bold text-2xl text-red-500" data-swiper-parallax="-300">
          Badminton
          </div>
          <div className="subtitle text-xl" data-swiper-parallax="-200">
          Badminton is a racket sport played by either two opposing players (singles) or two opposing pairs (doubles), who take positions on opposite halves of a rectangular court that is divided by a net. Players score points by striking a shuttlecock with their racket so that it passes over the net and lands in their opponents half of the court. A rally ends once the shuttlecock has struck the ground, and the shuttlecock may only be struck once by each side before it passes over the net.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Badminton has its origins in ancient civilizations in Asia and Europe with a game called battledore (bat or paddle) and shuttlecock.
            </p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
