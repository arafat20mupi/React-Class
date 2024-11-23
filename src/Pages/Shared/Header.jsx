import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className="">
            <div className="text-center space-y-3 py-6">

                <h1 className=" font-bold text-5xl " >
                    The Dragon News
                </h1>
                <p className="text-gray-300 text-lg  ">
                    Journalism Without Fear or Favour
                </p>
                <p>
                    <span className="font-semibold"> Sunday</span> , November 27, 2022
                </p>

            </div>
            <div className="flex bg-gray-100 items-center justify-center">
                <button className="p-3 rounded-lg bg-green-500 text-lg ">Latest</button>
                <Marquee speed={150}>
                    <p className="texl-lg font-bold">
                        <span className="font-extrabold">New York Times</span> : The New York Times published the latest article about the impact of climate change on the dragon.
                    </p>
                    
                </Marquee>
            </div>
        </div>
    );
};

export default Header;