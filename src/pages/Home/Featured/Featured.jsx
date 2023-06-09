import { Player } from "@lottiefiles/react-lottie-player";
import SectionHeading from "../../../components/SectionHeading";
import image from "../../../assets/Categories/Sports.jpg";


const Featured = () => {
  return (
    <div className="my-20">
      <SectionHeading heading={"Sports Quotes"}></SectionHeading>
      <div className="md:flex">
        <div>
          <div className="md:flex justify-center items-center">
            <img src={image} alt="" />
            <p className="-ms-80 mt-56 text-white">
              Champions arent made in the gyms. Champions are made from
              something they have deep inside them -- a desire, a dream, a
              vision. <span className="font-bold text-xl"> -Muhammad Ali World HeavyWeight Champion Boxer</span>
            </p>
          </div>
        </div>
        <div className="mx-auto md:mt-20">
          <p className="font-bold text-xl uppercase text-center">
            The only one who can tell you you cant win is you and you dont have
            to listen.
          </p>
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_aaleelx7.json"
            className="player"
            loop
            autoplay
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
