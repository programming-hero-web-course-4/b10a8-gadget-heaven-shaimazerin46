

const Footer = () => {
    return (
        <div className="mt-20 p-10">
            <hr />
            <div className="w-1/2 mx-auto text-center mt-10">
                <h3 className="mb-3 font-bold text-3xl">Gadget Heaven</h3>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex justify-between mt-10 ">
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-3">Services</h3>
                    <ul className="text-light space-y-3">
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="text-center">
                <h3 className="font-bold text-xl mb-3">Company</h3>
                    <ul className="text-light space-y-3">
                    <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                       
                    </ul>
                </div>
                <div className="text-center">
                <h3 className="font-bold text-xl mb-3">Legal</h3>
                    <ul className="text-light space-y-3">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;