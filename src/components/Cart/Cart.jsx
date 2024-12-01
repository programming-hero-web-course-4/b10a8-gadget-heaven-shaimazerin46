import { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../../Context/Context";
import CartItem from "./CartItem";
import Modal from "react-modal";

Modal.setAppElement("#root");


const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, setCart } = useContext(GadgetContext)
    const [storedData, setStoredData] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    console.log(cart)
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        const matchedItem = data?.filter(d => cart.includes(d.product_id))
        setStoredData(matchedItem)
    }, [data, cart])

    const totalCost = parseInt(storedData.reduce((sum, item) => sum + item.price, 0))

    const handleSorting = () => {
        const sorted = [...storedData].sort((a, b) => b.price - a.price);
        setStoredData(sorted)
    }
    const handlePurchase = () => {
        setCart('');
        setIsModalOpen(true)

    }
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                    <button onClick={handlePurchase} disabled={cart.length === 0} className="py-2 btn px-8 bg-[#9538e2] text-white rounded-3xl">
                        purchase
                    </button>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Purchase Confirmation"
                    style={{
                        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                        content: {
                            margin: "auto",
                            width: "300px",
                            height: "200px",
                            borderRadius: "10px",
                            textAlign: "center",
                        },
                    }}
                >   
                    <img src="https://img.icons8.com/?size=48&id=33824&format=png" alt="" className="mx-auto"/>
                    <h2>Congratulations!</h2>
                    <p className="text-sm"> successful purchased </p>
                    <button
                        onClick={closeModal}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            backgroundColor: "#9538e2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        Close
                    </button>
                </Modal>
            </div>
            <div className="mt-10">
                {storedData.map((item, idx) => <CartItem key={idx} item={item}></CartItem>)}
            </div>
        </div>
    );
};

export default Cart;