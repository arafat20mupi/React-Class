import { Outlet } from "react-router-dom";
import Navber from "./Shared/Navber";
import Footer from "./Shared/Footer";
import Header from "../Components/Home/Header";


const App = () => {
    return (
        <div className="font-nazmin">
            <Header></Header>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;