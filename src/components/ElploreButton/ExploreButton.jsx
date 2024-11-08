import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreButton = () => {
   
   
    
    return (
        <div>
             <div className=" bg-white p-5 rounded-xl self-start mx-auto">
                    <ul className="text-center space-y-5 flex flex-col">
                <NavLink to='/'  className={({isActive,isPending})=>isActive? 'btn-active' : isPending? 'pending':''}>All Products</NavLink>
                <NavLink to={`/catagory/Laptop`}  className={({isActive,isPending})=>isActive? 'btn-active' : isPending? 'pending':''}>Laptops</NavLink>
                <NavLink to={`/catagory/Phone`}  className={({isActive,isPending})=>isActive? 'btn-active' : isPending? 'pending':''}>Phones</NavLink>
                <NavLink to={`/catagory/Accessories`} className={({isActive,isPending})=>isActive? 'btn-active' : isPending? 'pending':''}>Accessories</NavLink>
                    </ul>
                </div>
        </div>
    );
};

export default ExploreButton;