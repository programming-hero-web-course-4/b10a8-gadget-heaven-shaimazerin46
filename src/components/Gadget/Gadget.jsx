import React from 'react';

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
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                     <button className='py-2 px-4 rounded-2xl border-2 border-[#9538E2] bg-white text-[#9538E2]'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;