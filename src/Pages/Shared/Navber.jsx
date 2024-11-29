import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navber = () => {
  return (
    <div className=" mt-2 text-xl py-3 items-center flex gap-3  justify-between">

      <div>
        <Link to='/' className="py-2 px-3 hover:text-green-400 ">Home</Link>
        <Link to='/about' className="py-2 px-3 hover:text-green-400 ">about</Link>
        <Link to='/Career' className="py-2 px-3 hover:text-green-400 ">Career</Link>
      </div>
      <div className="flex space-x-3 justify-center items-center">
        <Link className="text-2xl" >
          <CgProfile />
        </Link>
        <Link to='/signUp' className="py-2 px-3 text-white bg-green-500 rounded-lg  ">SignUp</Link>
      </div>

    </div>
  );
};

export default Navber;