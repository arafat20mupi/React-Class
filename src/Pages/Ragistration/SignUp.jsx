import { useEffect, useState } from "react";

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

    useEffect(() => {
        if (data) {
            console.log(data);
        }
        
    } , [data] )

    return (
        <div>
            <form className="w-full pt-3 min-h-60 bg-pink-100 shadow-lg px-3 space-y-2"
                onSubmit={handleSubmit}
            >
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

            <div className="text-xl font-bold text-center bg-black text-white space-y-3  py-4">
                {data && (
                    <div>
                        <h2>Sign Up Details:</h2>
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Phone: {data.phone}</p>
                        <p>Password: {data.password}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;
