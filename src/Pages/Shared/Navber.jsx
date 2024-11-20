import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <div className="bg-gray-100 text-xl items-center flex gap-3  justify-center">
       
          <Link to='/' className="py-2 px-3">Home</Link>
          <Link to='/Components' className="py-2 px-3">Components</Link>
          <Link to='/about' className="py-2 px-3">about</Link>
          <Link to='/signUp' className="py-2 px-3">SignUp</Link>
          
        </div>
    );
};

export default Navber;