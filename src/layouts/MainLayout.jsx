import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';





const MainLayout = () => {
    return (
        <div className="bg-[#F7F7F7]">
           <Toaster />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-296.8px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;