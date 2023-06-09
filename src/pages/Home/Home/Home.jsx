import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import RatingsSection from "../RatingsSection/RatingsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <RatingsSection></RatingsSection>
        </div>
    );
};

export default Home;