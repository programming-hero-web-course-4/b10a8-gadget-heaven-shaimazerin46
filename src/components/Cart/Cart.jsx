import { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../../Context/Context";
import CartItem from "./CartItem";


const Cart = () => {
    const {cart} = useContext(GadgetContext)
    const [storedData,setStoredData] = useState([])
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true);
    console.log(cart)
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{setData(data)
            setLoading(false)
        })
    },[])
    useEffect(()=>{
        const matchedItem = data?.filter(d=>cart.includes(d.product_id))
        setStoredData(matchedItem)
    },[data, cart])
   
    const totalCost = parseInt(storedData.reduce((sum,item)=>sum+item.price,0))
    
    const handleSorting = () => {
        const sorted = [...storedData].sort((a, b) => b.price - a.price);
        setStoredData(sorted)
    }
    return (
        <div>
            <div className="flex justify-between  py-10">
                <h2 className="text-xl font-bold">Cart</h2>
                <div className="flex gap-4 items-center">
                    <h2 className="text-xl font-bold">Total Cost:    ${totalCost}</h2>
                    <button onClick={handleSorting} className="btn py-2 px-8 border-[1px] border-[#9538e2] bg-white rounded-3xl">
                       <span className="mr-1"> Sort by price</span>
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                    </button>
                    <button className="py-2 btn px-8 bg-[#9538e2] text-white rounded-3xl">
                        purchase
                    </button>
                </div>
            </div>
        <div className="mt-10">
            {storedData.map((item,idx)=><CartItem key={idx} item={item}></CartItem>)}
        </div>
        </div>
    );
};

export default Cart;