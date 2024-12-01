import { useContext } from "react";
import { GadgetContext } from "../../Context/Context";


const WishlistItem = ({item}) => {
    const {addTocart} = useContext(GadgetContext)
    const {product_image,product_title,description,price,product_id} = item
    const handleCart = () =>{
        addTocart(product_id)
    }
    return (
        <div>
              <div className="flex mb-10 gap-5">
                <div>
                    <img src={product_image} alt="" className="h-[192px] w-[274px] object-cover rounded-xl"/>
                </div>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold">{product_title}</h2>
                    <p><span className="font-bold">Description: </span><span className="text-[#636364] text-sm">{description}</span></p>
                    <p><span className="font-bold">Price: </span><span className="text-[#636364] text-sm">${price}</span></p>
                    <button onClick={handleCart} className='btn py-1 px-10 bg-[#9538e2] text-white rounded-3xl'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;