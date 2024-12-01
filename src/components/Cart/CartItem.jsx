
const CartItem = ({item}) => {
    const {product_image,product_title,description,price} = item
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
                   
                </div>
            </div>
        </div>
    );
};

export default CartItem;