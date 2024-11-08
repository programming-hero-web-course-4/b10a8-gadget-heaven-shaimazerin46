import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";


export const GadgetsContext = createContext()
const Roots = () => {
    const {catagory} = useParams();
    const data = useLoaderData() || [];
    
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            
        
            <GadgetsContext.Provider value={{data,catagory}}> 
               
                <Outlet></Outlet>
                
            </GadgetsContext.Provider>
            
            
            <Footer></Footer>
           
            
        </div>
    );
};

export default Roots;