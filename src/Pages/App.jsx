import { Outlet } from "react-router-dom";
import Navber from "./Shared/Navber";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";


const App = () => {
    return (
        <div className="font-nazmin container mx-auto">
            <Header />
            <Navber />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;