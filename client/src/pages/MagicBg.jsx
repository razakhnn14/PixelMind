import React, { useContext, useState} from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MagicBg() {
  const [result, setResult] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [imageLoaded,setImageLoaded] = useState(false);
  
  
    const {setCredit} = useContext(AppContext)
  
    const navigate = useNavigate();
    
  

  const handleSubmit = async () => {
    setResult("");
    setLoading(true);
    setImageLoaded(false);
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);

     try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/images/magic-bg`, formData,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
      );
      if(!(res.data.success)){
        toast.error(res.data.message);
        if(res.data.message == "No Credits Left"){
        navigate("/pricing")
        }else{
          navigate("/get-started")
        }
      }else{
      setCredit(res.data.credits)
      setResult(res.data.url);
      }
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  return (
     <div className="min-h-screen bg-gradient-to-b from-[#1e002a] to-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Generative Background Replace
      </h1>

      {/* Upload box */}
      <div className="w-full max-w-md bg-[#111] rounded-lg p-6 shadow-lg border border-purple-600">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4 block w-full text-sm text-gray-300 
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full
                     file:text-sm file:font-semibold
                     file:bg-purple-600 file:text-white
                     hover:file:bg-purple-700 cursor-pointer hover:file:cursor-pointer hover:file:border  border rounded-full px-2 py-2 file:transition file:duration-300 file:ease-in-out"
        />

        <input
          type="text"
          placeholder="Describe the new background..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="mb-4 w-full p-3 rounded-lg border border-gray-600 text-white bg-black"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold cursor-pointer hover:border transition duration-300 ease-in-out hover:scale-101"
        >
          Generate
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center mt-10 font-semibold gap-2">
          <div>Loading...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-900"></div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-10 flex flex-col items-center">
        {!imageLoaded && <p>Please wait for image to show up.</p>}
          <img
            src={result}
            alt="Processed"
            className="rounded-lg shadow-lg max-w-full"
            onLoad={()=> setImageLoaded(true)}
          />
          {imageLoaded &&
          <a className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold  transition duration-300 ease-in-out hover:scale-101 hover:border" href={result} download>Download Image</a>
}
        </div>
      )}
    </div>
  )
}

export default MagicBg