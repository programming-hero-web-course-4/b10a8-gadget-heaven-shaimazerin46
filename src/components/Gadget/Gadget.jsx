import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_image, product_title, price, product_id } = gadget
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl flex flex-col space-y-3">
                <figure className="px-10 pt-10">
                    <img
                        src={product_image}
                        alt="Gadget"
                        className="rounded-xl h-[181px] w-full object-cover" />
                </figure>
                <div className="card-body flex flex-col grow">
                    <h2 className="font-bold">{product_title}</h2>
                    <p className='text-sm text-[#59585f]'>Price: {price}K</p>
                     <Link to={`/details/${product_id}`}  className='w-[150px] text-sm text-center mt-4 py-2 px-4 rounded-2xl border-[1px] mx-auto border-[#9538E2] bg-white text-[#9538E2]'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;