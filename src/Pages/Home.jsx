import HomeCategory from "../Components/Home/HomeCategory";
import HomeNews from "../Components/Home/HomeNews";
import SocialLogin from "../Components/Home/SocialLogin";


const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <HomeCategory />
            <HomeNews />
            <SocialLogin />
        </div>
    );
};

export default Home;