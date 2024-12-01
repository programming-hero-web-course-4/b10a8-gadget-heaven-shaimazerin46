import {createContext, useState} from "react";

export const GadgetContext = createContext();
const Context = ({children}) => {
    
    const [wishlist,setWishlist] = useState([]);
    const [cart,setCart] = useState([])
    const [loading,setLoading] = useState(true)
    const addToWishlist = (id) =>{
        setWishlist((prev) => [...new Set([...prev, id])]);
    }
    const addTocart=(id)=>{
        setCart((prev)=>[...new Set([...prev,id])])
    }
    const name = 'zerin'
    const info = {name,setLoading,addToWishlist,wishlist,setCart,cart,addTocart}
    return <GadgetContext.Provider value={info}>{children}</GadgetContext.Provider>
};

export default Context;