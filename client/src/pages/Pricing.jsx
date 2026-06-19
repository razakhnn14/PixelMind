import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const plans = [
  {
    name: 'Basic',
    use: "Best for Personal use.",
    price: 100,
    credits: 100,
  },
  {
    name: 'Pro',
    use: "Best for Business use.",
    price: 200,
    credits: 350,
  },
  {
    name: 'Elite',
    use: "Best for Enterprise use.",
    price: 500,
    credits: 1000,
  },
];

function Pricing() {
  const { user,setCredit } = useContext(AppContext);

  const handlePayment = async (plan) => {
    try {
      const orderRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/create-order`,{
        amount: plan.price},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      }
      );
      const { order } = orderRes.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'PixelMind',
        description: `Purchase ${plan.name} Plan`,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/verify`, {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            userId: user._id,
            credits: plan.credits,
          },{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
          if (verifyRes.data.success) {
            setCredit(verifyRes.data.credits)
            toast.success('Payment Successful! Credits added.');
            // Optionally: fetch updated user data here
          } else {
            toast.error(verifyRes.data.message);
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: '#7e22ce',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error('Error creating Razorpay order');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e002a] to-black text-white items-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Buy Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg border border-purple-600 text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-purple-500/30"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-purple-500 mb-4">Rs. {plan.price}</p>
              <p className="text-lg mb-6">{plan.use}</p>
              <p className="text-lg mb-6">{plan.credits} Credits</p>
              {user ? (
                <button
                  onClick={() => handlePayment(plan)}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded transition duration-200 cursor-pointer"
                >
                  Buy Now
                </button>
              ) : (
                <Link
                  to="/get-started"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded transition duration-200 cursor-pointer"
                >
                  Get Started
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
