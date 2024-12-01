import { React, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { GadgetContext } from '../../Context/Context';

const ProductDetails = () => {
    const { itemId } = useParams();
    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const {setLoading,addToWishlist,addTocart} = useContext(GadgetContext);
    

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                const matchedItem = data.find(d => d.product_id === itemId);
                setItem(matchedItem);
               
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [itemId]);


    if (!item) {
        return <p>Product not found.</p>;
    }

    const { price, product_title, product_image, description, specification, rating, availability } = item;
    const handleAddtoWishlist = ()=>{
        addToWishlist(itemId)
    }
    const handleAddToCart=()=>{
        addTocart(itemId)
    }
    return (
        <div>
       <Navbar></Navbar>
       <section>
         
       <div className='main-color rounded-2xl mt-5 mb-96'>
            <Helmet>
                <title>
                    {product_title}
                </title>
            </Helmet>
        <div className='relative h-[350px] inset-0 flex justify-center'>
            <div className='w-[500px] text-center mt-10 text-white'>
                <h3 className='font-bold text-2xl mb-3'>Product Details</h3>
                <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 hero bg-base-200 w-[800px] rounded-2xl -bottom-56">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img
                        src={product_image}
                        className="rounded-lg object-cover  h-[450px] w-[420px]" />
                    <div>
                        <h1 className="text-3xl font-semibold mb-3">{product_title}</h1>
                        <p className='font-semibold mb-3'>Price: ${price}</p>
                        <span className='py-2 px-3 border-[1px] border-[#309C08] bg-[#d8f5cd] text-[#309C08] rounded-2xl mb-3 text-[10px]'>
                            {
                               availability? 'In Stock' : 'Not Available'
                            }
                       </span>
                        <p className="py-6 text-sm text-light mb-3">
                           {
                            description
                           }
                        </p>
                        <h4 className='font-semibold mb-3'>Specification</h4>
                        <ul className='text-light list-decimal text-[14px] ml-8 mb-3'>
                            {specification.map((s,idx)=><li key={idx}>{s}</li>)}
                        </ul>
                        <span className='text-yellow-600 mb-8'>
                           <span className='text-black font-semibold '> Rating <span className='text-yellow-600'> <i className="fa-solid fa-star"></i></span></span>

                           <div className='mb-3 mt-3'>  <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className='text-black text-sm p-2 bg-slate-200 ml-3 rounded-full'>{rating}</span></div>
                        </span>

                        <div className='flex gap-5'>
                            <button onClick={handleAddToCart} className='py-2 px-4 main-color text-white flex gap-3 rounded-2xl'><span>
                            Add to Cart
                            </span>
                            <span className='flex py-1'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                           
                            </button>
                            <button onClick={handleAddtoWishlist} className="p-2 rounded-full bg-white border-2">
                        <img src="https://img.icons8.com/?size=50&id=87&format=png" alt="" className="w-5"/>
                    </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       </section>
       <Footer></Footer>
       </div>
    );
};

export default ProductDetails;