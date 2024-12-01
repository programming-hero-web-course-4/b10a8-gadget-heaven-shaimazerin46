import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Tracking = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-xl font-bold text-center my-10">Track your order here</h2>
            <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Order ID</span>
          </label>
          <input type="text" placeholder="your order ID" className="input input-bordered text-sm" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Billing email</span>
          </label>
          <input type="text" placeholder="your email address" className="input input-bordered text-sm" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#9538e2] text-white">Track</button>
        </div>

      </form>
    </div>
            <Footer></Footer>
        </div>
    );
};

export default Tracking;