
import ExploreButton from "../ElploreButton/ExploreButton";
import ExploreProductItem from "../ExploreProductItem/ExploreProductItem";

const ExploreGadget = () => {

   
   

    return (
        <div className="mt-56">
            <h3 className="text-center font-bold text-xl md:text-4xl">Explore Cutting-Edge Gadgets</h3>
            <div className="md:flex gap-10 mt-10">
               <ExploreButton></ExploreButton>
               <ExploreProductItem></ExploreProductItem>
            </div> 

        </div>
    );
};

export default ExploreGadget;
