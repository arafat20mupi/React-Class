import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../Pages/App";
import About from "../Components/About/About";
import SignUp from "../Pages/Ragistration/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about' ,
                element: <About/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            }
            
        ]
    },
]);

export default router;