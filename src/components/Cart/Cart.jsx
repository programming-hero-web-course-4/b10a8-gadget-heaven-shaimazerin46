import { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../../Context/Context";
import CartItem from "./CartItem";


const Cart = () => {
    const {cart} = useContext(GadgetContext)
    console.log(cart)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{setData(data)
            setLoading(false)
        })
    },[])
    const matchedItem = data?.filter(d=>cart.includes(d.product_id));
    return (
        <div className="mt-10">
            {matchedItem.map((item,idx)=><CartItem key={idx} item={item}></CartItem>)}
        </div>
    );
};

export default Cart;