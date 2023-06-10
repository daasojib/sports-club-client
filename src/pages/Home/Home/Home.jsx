import { Fade } from "react-awesome-reveal";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import RatingsSection from "../RatingsSection/RatingsSection";

const Home = () => {
    return (
        <div>
            <Fade>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <RatingsSection></RatingsSection>
            </Fade>
        </div>
    );
};

export default Home;