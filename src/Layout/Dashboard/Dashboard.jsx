import { Helmet} from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
       <div>
        <Navbar></Navbar>
        <div className="main-color rounded-2xl"> 
        <Helmet>
            <title>
                Gedget Heaven | Dashboard
            </title>
        </Helmet>
            <div className="mt-10  text-white text-center p-5 w-[800px] mx-auto">
                <h3 className="font-bold text-3xl mb-3">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='mt-7'>
                    <Link to='/dashboard/cart'><button className='btn border-[1px] py-1 px-10 bg-transparent text-white rounded-3xl mr-5'>Cart</button></Link>
                   <Link to='/dashboard/wishlist'>
                   <button className='btn border-[1px] py-1 px-10 bg-transparent text-white rounded-3xl'>Wishlist</button></Link>
                </div>
            </div>
           
        </div>
        <section className='max-w-5xl  mx-auto'>
                <Outlet></Outlet>
            </section>
        <Footer></Footer>
       </div>
    );
};

export default Dashboard;