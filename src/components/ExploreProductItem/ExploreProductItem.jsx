import React, {useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { useParams } from 'react-router-dom';


const ExploreProductItem = () => {
    const {catagory} = useParams();
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

  
   const [catagoryData,setCatagoryData] = useState([])
   useEffect(()=>{
   if(Array.isArray(data)){
    if(catagory){
        
            const filterData = data?.filter(d=>d.category===catagory)
            
            if(filterData){
            setCatagoryData(filterData)};
            }
            
     else{
            setCatagoryData(data)
        }
   }
        
},[data,catagory])

if(catagoryData.length===0){
    return <div className='text-3xl text-red-400 mx-auto mt-20'>No data found for this category.</div>;
}
    
   
  
return (
        <div>
            <div className="p-3 md:p-0 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {catagoryData.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
                        ))}
                    </div> 
                </div>
        </div>
    );
};

export default ExploreProductItem;