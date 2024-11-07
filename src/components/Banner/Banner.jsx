


const Banner = () => {
    return (
        <div className="main-color pt-10 border-radious-bottom md:pb-36 p-2 md:p-0">
            
            <div className="md:relative pt-10 text-white max-w-[800px] mx-auto text-center">
                <p className="mb-10 text-xl md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                <p className="mb-10 text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="px-4 py-3 rounded-xl bg-white text-black mb-10">Shop Now</button>
            </div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 p-2 border-2 md:border-white bg-white  rounded-2xl md:bg-white/30 ">
                <img src="../../../public/assets/banner.jpg" alt="" className="h-[300px] w-[630px] object-cover rounded-2xl"/>
            </div>
        </div>
    );
};

export default Banner;