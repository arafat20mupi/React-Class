import { useState } from "react";

const SignUp = () => {
    const [data, setData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;

        setData({ name, email, phone, password });
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-4  h-screen">
            <form className="w-full col-span-1 md:col-span-2 items-center justify-center flex flex-col pt-3 min-h-60 bg-pink-100 shadow-lg px-3 space-y-2"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl">Sign Up From</h1>
                <input
                    name="name"
                    type="text"
                    className="w-full px-3 py-3 rounded-md bg-zinc-100 border text-black"
                    placeholder="Type Your Name"
                />
                <input
                    name="email"
                    type="email"
                    className="w-full px-3 py-3 rounded-md bg-zinc-100 border text-black"
                    placeholder="Type Your Email"
                />
                <input
                    name="phone"
                    type="number"
                    className="w-full px-3 py-3 rounded-md bg-zinc-100 border text-black"
                    placeholder="Type Your Phone Number"
                />
                <input
                    name="password"
                    type="password"
                    className="w-full px-3 py-3 rounded-md bg-zinc-100 border text-black"
                    placeholder="Type Your Password"
                />
                <button
                    type="submit"
                    className="w-full px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-400"
                >
                    Sign Up
                </button>
            </form>

            <div>
                <div className="text-xl w-full  flex flex-col items-center justify-center font-bold text-center bg-red-500 text-white space-y-3  py-4">
                    <h1 className="text-3xl">From Data is hare</h1>
                    {
                        data &&
                        <div>
                            <h2>Sign Up Details:</h2>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Password: {data.password}</p>
                        </div>
                    }

                </div>
                <div className="text-xl w-full  flex flex-col items-center justify-center font-bold text-center bg-blue-500 text-white space-y-3  py-4">
                    <h1 className="text-3xl">From Data is hare</h1>
                    {
                        data &&
                        <div>
                            <h2>Sign Up Details:</h2>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Password: {data.password}</p>
                        </div>
                    }

                </div>
            </div>
            <div className="">
                <div className="text-xl w-full flex flex-col items-center justify-center font-bold text-center bg-lime-500 text-white space-y-3  py-4">
                    <h1 className="text-3xl">From Data is hare</h1>
                    {
                        data &&
                        <div>
                            <h2>Sign Up Details:</h2>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Password: {data.password}</p>
                        </div>
                    }

                </div>
                <div className="text-xl w-full flex flex-col items-center justify-center font-bold text-center bg-green-500 text-white space-y-3  py-4">
                    <h1 className="text-3xl">From Data is hare</h1>
                    {
                        data &&
                        <div>
                            <h2>Sign Up Details:</h2>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Password: {data.password}</p>
                        </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default SignUp;
