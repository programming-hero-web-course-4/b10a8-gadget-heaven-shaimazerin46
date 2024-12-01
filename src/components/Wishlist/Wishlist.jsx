import { useContext, useEffect, useState } from "react";
import WishlistItem from "./WishlistItem";
import { GadgetContext } from "../../Context/Context";



const Wishlist = () => {
    const {wishlist} = useContext(GadgetContext);
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{setData(data)
            setLoading(false)
        })
    },[])
    console.log(wishlist)
    const matchedItem = data?.filter(d=>wishlist.includes(d.product_id));
   
   
    return (
        <div className="mt-10">
            <h2 className="mb-10 text-xl font-bold">Wishlist</h2>
          
          {matchedItem.map((item,idx)=><WishlistItem key={idx} item={item}></WishlistItem>)}

        </div>
    );
};

export default Wishlist;