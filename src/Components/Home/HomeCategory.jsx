
import { Link } from "react-router-dom";

const HomeCategory = () => {
    return (
        <div>
            <h1>All Category</h1>
            <div>
                <Link className="active:bg-gray-100 px-3 py-2 " >National News</Link>
            </div>
        </div>
    );
};

export default HomeCategory;