import { Link, NavLink, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/dashboard'>Dashboard</NavLink>
    <NavLink to='/track'>Track your order</NavLink>
    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div style={{backgroundColor: isHomePage? '#9538e2':'transparent', color: isHomePage? 'white':'black'}} className="navbar mt-5 border-radious-top">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black space-y-3">
                                {links}    
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <Link to='/dashboard/cart' className="p-2 rounded-full bg-white">
                        <img src="https://img.icons8.com/?size=50&id=9671&format=png" alt="" className="w-5"/>
                    </Link>
                    <Link to='/dashboard/wishlist' className="p-2 rounded-full bg-white">
                        <img src="https://img.icons8.com/?size=50&id=87&format=png" alt="" className="w-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;