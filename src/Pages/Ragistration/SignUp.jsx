import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";

const SignUp = () => {
const {createUser} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

    const data = { name, email,password };
    console.log(data);
    createUser(email , password)


    };

    return (
        <div className="flex justify-center items-center  h-screen">
            <form className="w-full max-w-xl py-6 items-center justify-center flex flex-col pt-3 min-h-60 bg-pink-100 shadow-lg px-3 space-y-2"
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

        </div>
    );
};

export default SignUp;
