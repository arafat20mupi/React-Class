import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";


const About = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>About Us</h1>
            <p>This is the about page. Welcome, <span className="text-blue-500 font-bold text-xl"> {
                 user?.email
                }  </span>
            </p>
            <p>This is the about page. This is my Id, <span className="text-blue-500 font-bold text-xl"> {
                 user?.metadata.creationTime
                }  </span>
            </p>
        </div>
    );
};

export default About