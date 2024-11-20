import { Outlet } from "react-router-dom";
import Navber from "./Shared/Navber";
import Footer from "./Shared/Footer";


const App = () => {
    return (
        <div >
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;