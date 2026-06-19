import { useContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

export default function Auth() {
  const {setToken,setUser} = useContext(AppContext)
  const [isLogin,setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/login" : "/signup";
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/users${endpoint}`, formData);
      if(res.data.success){
        setToken(res.data.token);
        localStorage.setItem("token",res.data.token)
        setUser(res.data.user.name);
        navigate("/");
        toast.success("Welcome to PixelMind")
      }else{
        toast.error(res.data.msg);
      }
    } catch (err) {
      alert("Error Occured");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#1e002a] to-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-purple-600">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-purple-600 focus:outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-purple-600 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-purple-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition cursor-pointer"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
