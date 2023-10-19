import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;