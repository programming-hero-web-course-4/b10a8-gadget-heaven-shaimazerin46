import React, { useContext, useEffect, useState } from 'react';
import {GadgetsContext} from '../Roots/Roots'
import Gadget from '../Gadget/Gadget';
import { useParams } from 'react-router-dom';


const ExploreProductItem = () => {
    const {catagory} = useParams();
    const {data} = useContext(GadgetsContext)

  
   const [catagoryData,setCatagoryData] = useState([])
   useEffect(()=>{
   if(Array.isArray(data)){
    if(catagory){
        const filterData = data?.filter(d=>d.category===catagory)
        setCatagoryData(filterData)}
    else{
            setCatagoryData(data)
        }
   }
        
},[data,catagory])
    
   
  
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