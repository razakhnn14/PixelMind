import React, { useContext, useState} from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AspectRatio() {
  const [result, setResult] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [imageLoaded,setImageLoaded] = useState(false);

  const {setCredit} = useContext(AppContext)

  const navigate = useNavigate();
  

  // Handle file upload
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Upload and adjust aspect ratio
  const handleUpload = async () => {
    setResult("");
    setLoading(true);
    setImageLoaded(false);
    if (!image) return alert("Please upload an image first.");

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append("image", image);
    formData.append("aspectRatio", aspectRatio);
     try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/images/aspect-ratio`, formData,{
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
      toast.error(err);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e002a] to-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-400">
        Aspect Ratio Adjustment
      </h1>
      <p className="text-center text-gray-300 mb-10">
        Upload your image, choose a preset aspect ratio, and download your
        cropped version instantly.
      </p>

      {/* Upload Section */}
      <div className="w-full max-w-md bg-[#111] rounded-lg p-6 shadow-lg border border-purple-600">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 block w-full text-sm text-gray-300 
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full
                     file:text-sm file:font-semibold
                     file:bg-purple-600 file:text-white
                     hover:file:bg-purple-700 cursor-pointer hover:file:cursor-pointer hover:file:border  border rounded-full px-2 py-2 file:transition file:duration-300 file:ease-in-out"     
        />

        {/* Aspect Ratio Options */}
        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className="w-full bg-black border border-purple-500 rounded-md px-3 py-2 text-white cursor-pointer mb-6"
        >
          <option value="1:1">Instagram Post (1:1)</option>
          <option value="4:5">Instagram Portrait (4:5)</option>
          <option value="9:16">Instagram Story / Reels (9:16)</option>
          <option value="16:9">YouTube / Twitter Post (16:9)</option>
          <option value="3:1"> Twitter Header (3:1)</option>
          <option value="205:78">Facebook Cover (205:78)</option>
          <option value="3:2">Photography (3:2)</option>
          <option value="5:4">Large Portrait (5:4)</option>
          <option value="21:9">Cinematic (21:9)</option>
          <option value="2:3">Poster (2:3)</option>
          <option value="7:5">Medium Landscape (7:5)</option>
        </select>

        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold cursor-pointer hover:border transition duration-300 ease-in-out hover:scale-101"
        >
          Adjust Aspect Ratio
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
  );
}

export default AspectRatio;
